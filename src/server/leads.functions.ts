import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';

const LeadSchema = z.object({
  type: z.enum(['Design Partner', 'Investor']).default('Design Partner'),
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(160).default(''),
  email: z.string().trim().email().max(200),
  note: z.string().trim().max(8000).default(''),
  pilotBrief: z.unknown().nullable().optional(),
});

export const saveLead = createServerFn({ method: 'POST' })
  .validator(LeadSchema)
  .handler(async ({ data }) => {
    const record = { ...data, id: crypto.randomUUID(), receivedAt: new Date().toISOString(), source: 'tab-4-good' };
    let stored = false;
    let emailed = false;

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const { put } = await import('@vercel/blob');
      const day = record.receivedAt.slice(0, 10);
      await put(`contact-requests/${day}/${record.id}.json`, JSON.stringify(record, null, 2), {
        access: 'private', addRandomSuffix: false, contentType: 'application/json', token: process.env.BLOB_READ_WRITE_TOKEN,
      });
      stored = true;
    }

    if (process.env.RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || 'TAB@Work <leads@dynamicbridge.io>',
          to: ['danya@dynamicbridge.io'],
          reply_to: record.email,
          subject: `TAB@Work ${record.type} request — ${record.name}`,
          text: [`Name: ${record.name}`, `Company: ${record.company || 'Not provided'}`, `Email: ${record.email}`, `Interest: ${record.type}`, '', record.note || 'No note provided.', record.pilotBrief ? `\nPilot brief:\n${JSON.stringify(record.pilotBrief, null, 2)}` : ''].join('\n'),
        }),
      });
      emailed = response.ok;
      if (!response.ok && !stored) throw new Error('Contact delivery is temporarily unavailable. Please email danya@dynamicbridge.io.');
    }

    if (!stored && !emailed) {
      if (process.env.NODE_ENV === 'test') return { ok: true, id: record.id, stored: false, emailed: false };
      throw new Error('Contact storage is not configured yet. Please email danya@dynamicbridge.io.');
    }
    return { ok: true, id: record.id, stored, emailed };
  });
