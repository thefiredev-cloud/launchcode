import express from 'express';
import dotenv from 'dotenv';
import { playbooksRouter } from './api/playbooks';
import { logger } from './utils/logger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get('/health', (_, res) => res.json({ status: 'ok', service: 'launchcode' }));
app.use('/v1/playbooks', playbooksRouter);

app.listen(PORT, () => {
  logger.info(`LaunchCode API running on port ${PORT}`);
});

export default app;
