import { useState } from 'react';
import { ArrowRight, Loader2, Radar, ShieldCheck, Workflow } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { useContact } from './ContactDialog';
import { generatePilotBrief } from '@/server/pilot-brief.functions';

const INITIAL = { domain: 'Customer operations', toolchain: 'Salesforce, Slack, Jira, and AI copilots', teamScale: '100–500 people', stallPoints: '' };

export default function PilotFitStudio() {
  const [form, setForm] = useState(INITIAL);
  const [brief, setBrief] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { openContact } = useContact();
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      setBrief(await generatePilotBrief({ data: form }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'The pilot brief could not be generated.');
    } finally {
      setLoading(false);
    }
  };

  const convert = () => {
    if (!brief) return;
    openContact({
      type: 'Design Partner',
      note: `Pilot-fit request: ${brief.title}\n\nDomain: ${form.domain}\nStack: ${form.toolchain}\nTeam scale: ${form.teamScale}\nStall points: ${form.stallPoints}`,
      pilotBrief: brief,
    });
  };

  return (
    <section id="pilot-fit" className="relative tab-section border-t border-tab-ghost bg-white/35">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-4">PILOT-FIT STUDIO</p>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="font-heading font-semibold tracking-[-0.02em] text-3xl sm:text-5xl leading-tight mb-5">Turn one stalled workflow into a testable pilot.</h2>
              <p className="text-tab-muted max-w-lg">Describe the operating environment. TAB maps the breakdown, the minimum intervention, and a four-week measurement plan.</p>
              <div className="mt-8 grid gap-3">
                {[['01', 'Diagnose the stall'], ['02', 'Design Detect · Coordinate · Recover'], ['03', 'Define proof before deployment']].map(([n, label]) => (
                  <div key={n} className="flex items-center gap-4 border-t border-tab-ghost py-3">
                    <span className="tab-mono text-[0.6rem] text-tab-accent">{n}</span><span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-tab-ghost bg-tab-base p-5 sm:p-7 shadow-[0_24px_80px_rgba(10,10,11,0.06)]">
              <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4" data-testid="pilot-fit-form">
                <Field label="Workflow domain"><input value={form.domain} onChange={update('domain')} /></Field>
                <Field label="Team scale"><input value={form.teamScale} onChange={update('teamScale')} /></Field>
                <Field label="Current toolchain" wide><input value={form.toolchain} onChange={update('toolchain')} /></Field>
                <Field label="Where does execution stall?" wide><textarea required rows={4} value={form.stallPoints} onChange={update('stallPoints')} placeholder="Example: handoffs leave Slack without an owner; approvals wait in email; AI output is reviewed twice…" /></Field>
                {error && <p className="sm:col-span-2 text-sm text-red-600" role="alert">{error}</p>}
                <button disabled={loading} className="sm:col-span-2 inline-flex justify-center items-center gap-2 bg-tab-ink text-tab-base px-5 py-3.5 tab-mono text-xs hover:bg-tab-accent disabled:opacity-60">
                  {loading ? <Loader2 size={15} className="animate-spin" /> : <Radar size={15} />}
                  {loading ? 'Building brief…' : 'Generate pilot-fit brief'}
                </button>
              </form>

              {brief && <Brief brief={brief} onConvert={convert} />}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function Brief({ brief, onConvert }) {
  return (
    <div className="mt-8 border-t border-tab-ghost pt-7" data-testid="pilot-brief">
      <p className="tab-mono text-[0.6rem] text-tab-accent mb-2">GENERATED PILOT BRIEF</p>
      <h3 className="font-heading text-2xl font-semibold mb-6">{brief.title}</h3>
      <BriefSection icon={ShieldCheck} title="Breakdown diagnosis">
        {brief.diagnosis.map((item) => <div key={item.classification} className="border-l-2 border-tab-accent pl-4 mb-4"><h4 className="font-semibold">{item.classification}</h4><p className="text-sm text-tab-muted mb-1">{item.evidence}</p><p className="text-xs">{item.operationalRisk}</p></div>)}
      </BriefSection>
      <BriefSection icon={Workflow} title="Intervention architecture">
        <div className="grid sm:grid-cols-3 gap-4">
          {Object.entries(brief.intervention).map(([key, items]) => <div key={key}><h4 className="tab-mono text-[0.6rem] text-tab-accent mb-2">{key}</h4><ul className="text-sm text-tab-muted space-y-2">{items.map((item) => <li key={item}>— {item}</li>)}</ul></div>)}
        </div>
      </BriefSection>
      <BriefSection title="4-week scope">
        <div className="grid sm:grid-cols-2 gap-px bg-tab-ghost">
          {brief.pilot.map((item) => <div key={item.week} className="bg-tab-base p-4"><p className="tab-mono text-[0.58rem] text-tab-accent mb-1">{item.week}</p><h4 className="font-semibold text-sm mb-1">{item.focus}</h4><p className="text-xs text-tab-muted">{item.deliverable}</p></div>)}
        </div>
      </BriefSection>
      <BriefSection title="Success metrics">
        <div className="space-y-3">{brief.metrics.map((metric) => <div key={metric.name} className="grid sm:grid-cols-[1fr_1.5fr_auto] gap-2 text-sm border-t border-tab-ghost pt-3"><strong>{metric.name}</strong><span className="text-tab-muted">{metric.definition}</span><span className="text-tab-accent">{metric.target}</span></div>)}</div>
      </BriefSection>
      <button type="button" onClick={onConvert} className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-tab-accent text-white px-5 py-3.5 tab-mono text-xs hover:bg-tab-ink">
        Convert to design partnership <ArrowRight size={14} />
      </button>
    </div>
  );
}

function BriefSection({ icon: Icon, title, children }) {
  return <div className="mb-7"><div className="flex items-center gap-2 mb-3">{Icon && <Icon size={15} className="text-tab-accent" />}<h4 className="font-semibold">{title}</h4></div>{children}</div>;
}

function Field({ label, wide, children }) {
  return <label className={wide ? 'sm:col-span-2' : ''}><span className="tab-mono text-[0.58rem] text-tab-muted block mb-1.5">{label}</span><div className="[&_input]:w-full [&_textarea]:w-full [&_input]:bg-transparent [&_textarea]:bg-transparent [&_input]:border [&_textarea]:border [&_input]:border-tab-ghost [&_textarea]:border-tab-ghost [&_input]:px-3 [&_textarea]:px-3 [&_input]:py-2.5 [&_textarea]:py-2.5 [&_input]:text-sm [&_textarea]:text-sm [&_input]:outline-none [&_textarea]:outline-none [&_input:focus]:border-tab-accent [&_textarea:focus]:border-tab-accent">{children}</div></label>;
}
