import { useMemo, useState } from 'react';
import { ArrowUp, Headphones, MessageCircle, Sparkles, Square, X } from 'lucide-react';
import { useContact } from './ContactDialog';

const SECTIONS = {
  thesis: 'thesis',
  product: 'product',
  architecture: 'product',
  validation: 'validation',
  founder: 'founder',
};

const SUMMARIES = {
  thesis: 'TAB is an execution-recovery layer for AI-native organizations. It focuses on the work that falls between tools, people, permissions, and agents—detecting breakdowns, coordinating the smallest authorized intervention, and preserving continuity until completion.',
  enterprise: 'TAB sits across the existing stack rather than replacing it. It observes workflow-level signals, classifies breakdowns, routes recovery to the right person, system, or agent, and measures outcomes with aggregate operational metrics rather than individual surveillance.',
};

export default function TabAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'I can navigate the site, give a 90-second briefing, read it aloud, or capture a design-partner request.' }]);
  const [captureStep, setCaptureStep] = useState(null);
  const [lead, setLead] = useState({ name: '', company: '', email: '', note: '' });
  const [speaking, setSpeaking] = useState(false);
  const { openContact } = useContact();

  const canSpeak = useMemo(() => typeof window !== 'undefined' && 'speechSynthesis' in window, []);
  const reply = (text) => setMessages((current) => [...current, { role: 'assistant', text }]);

  const navigate = (section) => {
    const id = SECTIONS[section];
    if (window.location.pathname !== '/') {
      window.location.assign(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
    reply(`Taking you to ${section}.`);
  };

  const speak = (text = SUMMARIES.thesis) => {
    if (!canSpeak) {
      reply('Speech synthesis is not available in this browser.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.96;
    utterance.pitch = 1;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  };

  const startCapture = () => {
    setCaptureStep('name');
    reply('Let’s make the handoff clean. What’s your name?');
  };

  const handleCapture = (value) => {
    if (captureStep === 'name') {
      setLead((current) => ({ ...current, name: value }));
      setCaptureStep('company');
      reply('Thanks. Which company or team are you with?');
    } else if (captureStep === 'company') {
      setLead((current) => ({ ...current, company: value }));
      setCaptureStep('email');
      reply('What email should Danya use for the follow-up?');
    } else if (captureStep === 'email') {
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        reply('That email looks incomplete. Please enter a work email in the form name@company.com.');
        return;
      }
      setLead((current) => ({ ...current, email: value }));
      setCaptureStep('note');
      reply('Last one: what workflow keeps stalling?');
    } else if (captureStep === 'note') {
      const complete = { ...lead, note: value };
      setLead(complete);
      setCaptureStep(null);
      reply('I’ve transferred those details into the Design Partnership application for your review.');
      openContact({ type: 'Design Partner', ...complete });
    }
  };

  const handleMessage = (raw) => {
    const value = raw.trim();
    if (!value) return;
    setMessages((current) => [...current, { role: 'user', text: value }]);
    setInput('');
    if (captureStep) return handleCapture(value);
    const normalized = value.toLowerCase();
    const section = Object.keys(SECTIONS).find((key) => normalized.includes(key));
    if (section && /(go|show|take|navigate|open|section)/.test(normalized)) return navigate(section);
    if (/(listen|read|speak|audio)/.test(normalized)) {
      const text = normalized.includes('enterprise') ? SUMMARIES.enterprise : SUMMARIES.thesis;
      reply('Starting the audio briefing. You can stop it at any time.');
      return speak(text);
    }
    if (/(summary|summarize|brief|90.second|overview)/.test(normalized)) {
      const text = normalized.includes('enterprise') ? SUMMARIES.enterprise : SUMMARIES.thesis;
      reply(text);
      return;
    }
    if (/(partner|contact|talk|apply|pilot)/.test(normalized)) return startCapture();
    reply('Try “summarize the thesis,” “go to architecture,” “read the enterprise overview,” or “start a design partnership.”');
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="relative h-9 w-9 rounded-full border border-tab-accent/30 bg-tab-base text-tab-accent flex items-center justify-center shadow-[0_0_0_5px_rgba(124,58,237,0.06),0_0_24px_rgba(124,58,237,0.22)] hover:scale-105 transition-transform"
        aria-label="Open TAB assistant"
        aria-expanded={open}
        data-testid="tab-assistant-trigger"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-tab-accent/10" aria-hidden="true" />
        <Sparkles size={16} className="relative" />
      </button>
      {open && (
        <aside className="fixed md:absolute top-14 md:top-12 right-3 md:right-0 left-3 md:left-auto md:w-[390px] max-h-[calc(100vh-5rem)] bg-tab-base border border-tab-ghost shadow-[0_24px_80px_rgba(10,10,11,0.18)] z-[70] flex flex-col" data-testid="tab-assistant">
          <div className="flex items-center justify-between px-4 py-3 border-b border-tab-ghost">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-tab-accent" /><span className="font-semibold text-sm">Ask TAB</span></div>
            <button onClick={() => setOpen(false)} aria-label="Close TAB assistant"><X size={16} /></button>
          </div>
          <div className="p-4 overflow-y-auto space-y-3 min-h-[220px] max-h-[420px]" aria-live="polite">
            {messages.map((message, index) => (
              <div key={index} className={message.role === 'assistant' ? 'mr-8' : 'ml-8'}>
                <p className={`text-sm leading-relaxed px-3 py-2.5 ${message.role === 'assistant' ? 'bg-tab-ghost/55 text-tab-ink' : 'bg-tab-ink text-tab-base'}`}>{message.text}</p>
              </div>
            ))}
          </div>
          <div className="px-4 pb-3 flex flex-wrap gap-2">
            <Quick label="Thesis summary" onClick={() => handleMessage('Summarize the thesis')} />
            <Quick label="Enterprise overview" onClick={() => handleMessage('Summarize the enterprise overview')} />
            <Quick label={speaking ? 'Stop audio' : 'Listen'} onClick={speaking ? stopSpeaking : () => handleMessage('Read the thesis aloud')} icon={speaking ? Square : Headphones} />
            <Quick label="Design partnership" onClick={startCapture} icon={MessageCircle} />
          </div>
          <form onSubmit={(event) => { event.preventDefault(); handleMessage(input); }} className="border-t border-tab-ghost p-3 flex gap-2">
            <input value={input} onChange={(event) => setInput(event.target.value)} aria-label="Message TAB" placeholder={captureStep ? 'Type your answer…' : 'Ask TAB…'} className="flex-1 min-w-0 bg-transparent border border-tab-ghost px-3 py-2 text-sm outline-none focus:border-tab-accent" />
            <button aria-label="Send message" className="h-9 w-9 bg-tab-ink text-tab-base flex items-center justify-center"><ArrowUp size={15} /></button>
          </form>
        </aside>
      )}
    </div>
  );
}

function Quick({ label, onClick, icon: Icon }) {
  return <button type="button" onClick={onClick} className="inline-flex items-center gap-1.5 border border-tab-ghost px-2.5 py-1.5 text-[11px] text-tab-muted hover:text-tab-ink hover:border-tab-accent">{Icon && <Icon size={12} />}{label}</button>;
}
