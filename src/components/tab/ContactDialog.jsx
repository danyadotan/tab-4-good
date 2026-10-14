import { cloneElement, createContext, useContext, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Loader2, Check } from 'lucide-react';
import { saveLead } from '@/server/leads.functions';

const EMPTY = { type: 'Design Partner', name: '', company: '', email: '', note: '', pilotBrief: null };
const ContactContext = createContext(null);

export function ContactProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState(EMPTY);

  const openContact = (prefill = {}) => {
    setSubmitted(false);
    setError('');
    setForm((current) => ({ ...current, ...prefill }));
    setOpen(true);
  };

  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const onSubmit = async (event) => {
    event.preventDefault();
    setError('');
    if (!form.name.trim() || !form.email.trim()) {
      setError('Please provide your name and email.');
      return;
    }
    setLoading(true);
    try {
      await saveLead({ data: form });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'We could not save your request. Please email danya@dynamicbridge.io.');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (next) => {
    setOpen(next);
    if (!next) window.setTimeout(() => {
      setSubmitted(false);
      setError('');
      setForm(EMPTY);
    }, 200);
  };

  return (
    <ContactContext.Provider value={{ openContact, form }}>
      {children}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[520px] bg-tab-base border-tab-ghost">
          {submitted ? (
            <div className="py-10 text-center" data-testid="contact-success">
              <div className="mx-auto mb-5 h-12 w-12 rounded-full bg-tab-accent/10 flex items-center justify-center">
                <Check size={24} className="text-tab-accent" strokeWidth={2} />
              </div>
              <h3 className="font-heading font-semibold text-tab-ink text-xl mb-2">Request saved.</h3>
              <p className="text-tab-muted">Danya has your details and the workflow context you shared.</p>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-xl text-tab-ink">Build the execution layer with us</DialogTitle>
                <DialogDescription className="text-tab-muted">Your request is securely saved for follow-up.</DialogDescription>
              </DialogHeader>
              <form onSubmit={onSubmit} className="space-y-4" data-testid="contact-form">
                <div className="grid grid-cols-2 gap-2">
                  {['Design Partner', 'Investor'].map((value) => (
                    <button type="button" key={value} onClick={() => setForm((current) => ({ ...current, type: value }))} className={`px-4 py-3 text-sm border transition-colors ${form.type === value ? 'border-tab-accent bg-tab-accent/5 text-tab-ink' : 'border-tab-ghost text-tab-muted hover:border-tab-muted'}`}>
                      {value}
                    </button>
                  ))}
                </div>
                <Field label="Name"><input name="name" value={form.name} onChange={update('name')} className="w-full bg-transparent border border-tab-ghost px-3 py-2.5 text-sm text-tab-ink focus:border-tab-accent outline-none" /></Field>
                <Field label="Company"><input name="company" value={form.company} onChange={update('company')} className="w-full bg-transparent border border-tab-ghost px-3 py-2.5 text-sm text-tab-ink focus:border-tab-accent outline-none" /></Field>
                <Field label="Email"><input name="email" type="email" value={form.email} onChange={update('email')} className="w-full bg-transparent border border-tab-ghost px-3 py-2.5 text-sm text-tab-ink focus:border-tab-accent outline-none" /></Field>
                <Field label="Workflow challenge"><textarea name="note" rows={4} value={form.note} onChange={update('note')} className="w-full bg-transparent border border-tab-ghost px-3 py-2.5 text-sm text-tab-ink focus:border-tab-accent outline-none resize-none" /></Field>
                {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
                <button type="submit" disabled={loading} className="w-full py-3.5 bg-tab-ink text-tab-base tab-mono text-xs hover:bg-tab-accent transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                  {loading && <Loader2 size={14} className="animate-spin" />}
                  {loading ? 'Saving…' : 'Save request'}
                </button>
                <p className="text-xs text-tab-muted text-center">Or email <a href="mailto:danya@dynamicbridge.io" className="underline">danya@dynamicbridge.io</a>.</p>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </ContactContext.Provider>
  );
}

export function useContact() {
  const value = useContext(ContactContext);
  if (!value) throw new Error('useContact must be used inside ContactProvider');
  return value;
}

export default function ContactDialog({ trigger, defaultType = 'Design Partner' }) {
  const { openContact } = useContact();
  return cloneElement(trigger, {
    onClick: (event) => {
      trigger.props.onClick?.(event);
      openContact({ type: defaultType });
    },
  });
}

function Field({ label, children }) {
  return <label className="block"><span className="tab-mono text-[0.6rem] text-tab-muted mb-1.5 block">{label}</span>{children}</label>;
}
