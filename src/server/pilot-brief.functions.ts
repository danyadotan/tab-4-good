import { chat } from '@tanstack/ai';
import { vercelGatewayText } from '@tanstack/ai-vercel-gateway';
import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';

const PilotInput = z.object({
  domain: z.string().trim().min(2).max(120),
  toolchain: z.string().trim().min(2).max(500),
  teamScale: z.string().trim().min(1).max(120),
  stallPoints: z.string().trim().min(8).max(2000),
});

const PilotBrief = z.object({
  title: z.string(),
  diagnosis: z.array(z.object({ classification: z.string(), evidence: z.string(), operationalRisk: z.string() })).min(1).max(3),
  intervention: z.object({ detect: z.array(z.string()).min(1), coordinate: z.array(z.string()).min(1), recover: z.array(z.string()).min(1) }),
  pilot: z.array(z.object({ week: z.string(), focus: z.string(), deliverable: z.string() })).length(4),
  metrics: z.array(z.object({ name: z.string(), definition: z.string(), target: z.string() })).min(3).max(5),
  assumptions: z.array(z.string()).max(5),
});

const SYSTEM_PROMPT = `You are TAB's enterprise pilot architect. TAB is an execution-recovery layer across people, enterprise systems, and AI agents. It detects breakdowns, coordinates the smallest authorized intervention, and recovers work without surveillance or replacing the source systems.

Produce a concrete four-week pilot brief. Diagnose only these breakdown classes when supported: decision vacuum, permission wall, dropped context, ownership ambiguity, review bottleneck, or failed handoff. Tune the architecture to the prospect's named stack. Never claim integrations, outcomes, authority, or measurements that were not supplied. Protect privacy: prefer aggregate workflow signals and minimum necessary data. Return JSON only with this exact shape: {title, diagnosis:[{classification,evidence,operationalRisk}], intervention:{detect:[],coordinate:[],recover:[]}, pilot:[{week,focus,deliverable}] exactly four entries, metrics:[{name,definition,target}], assumptions:[]}. Targets must be bounded pilot hypotheses, not guarantees.`;

export const generatePilotBrief = createServerFn({ method: 'POST' })
  .validator(PilotInput)
  .handler(async ({ data }) => {
    const { text } = await chat({
      adapter: vercelGatewayText('google/gemini-2.5-flash'),
      systemPrompts: [SYSTEM_PROMPT],
      messages: [
        { role: 'user', content: `Workflow domain: ${data.domain}\nCurrent toolchain: ${data.toolchain}\nTeam scale: ${data.teamScale}\nPrimary stall points: ${data.stallPoints}` },
      ],
      stream: false,
    });
    const cleaned = text.trim().replace(/^\`\`\`(?:json)?\s*/i, '').replace(/\s*\`\`\`$/, '');
    return PilotBrief.parse(JSON.parse(cleaned));
  });
