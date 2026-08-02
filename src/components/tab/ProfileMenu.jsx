import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { useAuth } from '@/lib/AuthContext';
import { base44 } from '@/api/base44Client';
import { Loader2, LogOut, Trash2, Check } from 'lucide-react';

export default function ProfileMenu() {
  const { user, isAuthenticated, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(user?.full_name || '');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [error, setError] = useState('');

  if (!isAuthenticated || !user) return null;

  const initial = (user.full_name || user.email || '?').charAt(0).toUpperCase();

  const saveProfile = async () => {
    setError('');
    setSaving(true);
    try {
      await base44.auth.updateMe({ full_name: name.trim() });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (e) {
      setError('Could not save profile.');
    } finally {
      setSaving(false);
    }
  };

  const deleteAccount = async () => {
    setError('');
    setDeleting(true);
    try {
      await base44.functions.invoke('deleteMyAccount', {});
      logout(false);
      window.location.href = '/';
    } catch (e) {
      setError('Could not delete account.');
      setDeleting(false);
    }
  };

  const trigger = (
    <button
      aria-label="Account and profile settings"
      className="h-8 w-8 rounded-full bg-tab-ink text-tab-base flex items-center justify-center tab-mono text-[0.7rem] hover:bg-tab-accent transition-colors"
    >
      {initial}
    </button>
  );

  return (
    <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) { setConfirmOpen(false); setError(''); } }}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[440px] bg-tab-base border-tab-ghost">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl text-tab-ink">Account</DialogTitle>
          <DialogDescription className="text-tab-muted">Manage your profile and session.</DialogDescription>
        </DialogHeader>
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-tab-accent/10 text-tab-accent flex items-center justify-center tab-mono">
              {initial}
            </div>
            <div className="min-w-0">
              <p className="font-heading font-semibold text-tab-ink text-sm truncate">{user.full_name || 'Member'}</p>
              <p className="text-xs text-tab-muted truncate">{user.email}</p>
            </div>
          </div>

          <div>
            <label className="tab-mono text-[0.6rem] text-tab-muted mb-1.5 block">Display name</label>
            <div className="flex gap-2">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 bg-transparent border border-tab-ghost px-3 py-2.5 text-sm text-tab-ink focus:border-tab-accent outline-none"
              />
              <button
                onClick={saveProfile}
                disabled={saving}
                className="px-4 py-2.5 bg-tab-ink text-tab-base tab-mono text-[0.65rem] hover:bg-tab-accent transition-colors disabled:opacity-60 flex items-center gap-1.5"
              >
                {saving ? <Loader2 size={12} className="animate-spin" /> : saved ? <Check size={12} /> : null}
                {saving ? 'Saving' : saved ? 'Saved' : 'Save'}
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-tab-ghost space-y-2.5">
            <button
              onClick={() => logout(true)}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm text-tab-ink hover:bg-tab-ghost/50 transition-colors"
            >
              <LogOut size={15} strokeWidth={1.5} className="text-tab-muted" /> Sign out
            </button>

            {!confirmOpen ? (
              <button
                onClick={() => setConfirmOpen(true)}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
              >
                <Trash2 size={15} strokeWidth={1.5} /> Delete account
              </button>
            ) : (
              <div className="pl-9 space-y-2">
                <p className="text-xs text-tab-muted">This permanently removes your account. This action cannot be undone.</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setConfirmOpen(false)}
                    className="px-3 py-2 text-xs text-tab-muted hover:text-tab-ink transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={deleteAccount}
                    disabled={deleting}
                    className="px-3 py-2 text-xs bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-60 flex items-center gap-1.5"
                  >
                    {deleting && <Loader2 size={12} className="animate-spin" />} Confirm delete
                  </button>
                </div>
              </div>
            )}
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
      </DialogContent>
    </Dialog>
  );
}