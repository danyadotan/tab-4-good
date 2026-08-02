import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { base44 } from '@/api/base44Client';
import { Loader2, Check } from 'lucide-react';

export default function ContactDialog({ trigger, defaultType = 'Design Partner' }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ type: defaultType, name: '', company: '', email: '', note: '' });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.email.trim()) {
      setError('Please provide your name and email.');
      return;
    }
    setLoading(true);
    try {
      await base44.entities.Lead.create(form);
      setSubmitted(true);
      setLoading(false);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  const handleOpenChange = (o) => {
    setOpen(o);
    if (!o) {
      setTimeout(() => {
        setSubmitted(false);
        setError('');
        setForm({ type: defaultType, name: '', company: '', email: '', note: '' });
      }, 200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[480px] bg-[#F9F9F8] border-tab-ghost">
        {submitted ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-5 h-12 w-12 rounded-full bg-tab-accent/10 flex items-center justify-center">
              <Check size={24} className="text-tab-accent" strokeWidth={2} />
            </div>
            <h3 className="font-heading font-semibold text-tab-ink text-xl mb-2">Thank you.</h3>
            <p className="text-tab-muted">We've received your request and will be in touch shortly.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-xl text-tab-ink">Build the execution layer with us</DialogTitle>
              <DialogDescription className="text-tab-muted">Tell us how you'd like to engage.</DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {['Design Partner', 'Investor'].map((val) => (
                  <button
                    type="button"
                    key={val}
                    onClick={() => setForm({ ...form, type: val })}
                    className={`px-4 py-3 text-sm border transition-colors ${form.type === val ? 'border-tab-accent bg-tab-accent/5 text-tab-ink' : 'border-tab-ghost text-tab-muted hover:border-tab-muted'}`}
                  >
                    {val}
                  </button>
                ))}
              </div>
              <Field label="Name">
                <input value={form.name} onChange={update('name')} className="w-full bg-transparent border border-tab-ghost px-3 py-2.5 text-sm text-tab-ink focus:border-tab-accent outline-none" />
              </Field>
              <Field label="Company">
                <input value={form.company} onChange={update('company')} className="w-full bg-transparent border border-tab-ghost px-3 py-2.5 text-sm text-tab-ink focus:border-tab-accent outline-none" />
              </Field>
              <Field label="Email">
                <input type="email" value={form.email} onChange={update('email')} className="w-full bg-transparent border border-tab-ghost px-3 py-2.5 text-sm text-tab-ink focus:border-tab-accent outline-none" />
              </Field>
              <Field label="Note">
                <textarea rows={3} value={form.note} onChange={update('note')} className="w-full bg-transparent border border-tab-ghost px-3 py-2.5 text-sm text-tab-ink focus:border-tab-accent outline-none resize-none" />
              </Field>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button type="submit" disabled={loading} className="w-full py-3.5 bg-tab-ink text-tab-base tab-mono text-xs hover:bg-tab-accent transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                {loading && <Loader2 size={14} className="animate-spin" />}
                {loading ? 'Sending…' : 'Submit'}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="tab-mono text-[0.6rem] text-tab-muted mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}