import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { ComplianceEngine } from '../compliance/engine';
import { logger } from '../utils/logger';

export const playbooksRouter = Router();

const PlaybookRequestSchema = z.object({
  business_type: z.string().min(1),
  jurisdictions: z.array(z.string()).min(1),
  entity_type: z.enum(['LLC', 'Corp', 'Sole Proprietor', 'Partnership']),
  business_info: z.object({
    name: z.string(),
    owner_name: z.string(),
    address: z.string().optional(),
    ein: z.string().optional(),
  }),
  options: z.object({
    include_forms: z.boolean().default(true),
    include_calendar: z.boolean().default(true),
    include_costs: z.boolean().default(true),
  }).optional(),
});

playbooksRouter.post('/', async (req: Request, res: Response) => {
  try {
    const parsed = PlaybookRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid request', details: parsed.error.issues });
    }

    const engine = new ComplianceEngine();
    const playbook = await engine.generate(parsed.data);

    return res.status(201).json(playbook);
  } catch (err) {
    logger.error('Playbook generation failed', { error: err });
    return res.status(500).json({ error: 'Internal server error' });
  }
});

playbooksRouter.get('/:playbookId', async (req: Request, res: Response) => {
  // TODO: Retrieve playbook by ID
  return res.status(404).json({ error: 'Not found' });
});

playbooksRouter.get('/:playbookId/download', async (req: Request, res: Response) => {
  // TODO: Download playbook as PDF
  return res.status(404).json({ error: 'Not found' });
});
