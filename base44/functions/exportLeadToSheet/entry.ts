import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

const SHEET_TITLE = 'TAB@Work Leads';
const HEADERS = ['Date', 'Type', 'Name', 'Company', 'Email', 'Note'];

async function findSheet(accessToken) {
  const q = `name='${SHEET_TITLE}' and mimeType='application/vnd.google-apps.spreadsheet' and trashed=false`;
  const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=files(id,name)&pageSize=1`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } });
  if (!res.ok) return null;
  const data = await res.json();
  return data.files && data.files[0] ? data.files[0].id : null;
}

async function createSheet(accessToken) {
  const res = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      properties: { title: SHEET_TITLE },
      sheets: [{ properties: { title: 'Leads', index: 0 } }],
    }),
  });
  if (!res.ok) throw new Error('Failed to create spreadsheet: ' + await res.text());
  const data = await res.json();
  const spreadsheetId = data.spreadsheetId;
  await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:F1?valueInputOption=RAW`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ values: [HEADERS] }),
  });
  return spreadsheetId;
}

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);

    const body = await req.json().catch(() => ({}));
    const leadId = body.lead_id || (body.lead && body.lead.id);
    if (!leadId) {
      return Response.json({ error: 'lead_id is required' }, { status: 400 });
    }

    // Trust boundary: only export leads that actually exist in the database.
    // This binds the Google Sheets write to a real Lead record, so the endpoint
    // cannot be used to inject arbitrary rows using the owner's Google credentials.
    const lead = await base44.asServiceRole.entities.Lead.get(leadId).catch(() => null);
    if (!lead) {
      return Response.json({ error: 'Lead not found' }, { status: 404 });
    }

    const { accessToken } = await base44.asServiceRole.connectors.getConnection('googlesheets');

    const row = [
      lead.created_date || new Date().toISOString(),
      lead.type || '',
      lead.name || '',
      lead.company || '',
      lead.email || '',
      lead.note || '',
    ];

    let spreadsheetId = await findSheet(accessToken);
    if (!spreadsheetId) {
      spreadsheetId = await createSheet(accessToken);
    }

    const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A:A:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
    const appendRes = await fetch(appendUrl, {
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ values: [row] }),
    });
    if (!appendRes.ok) {
      const errText = await appendRes.text();
      return Response.json({ error: 'Append failed', details: errText }, { status: 500 });
    }
    return Response.json({ ok: true, spreadsheetId });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}