/**
 * Calendar Call — бэкенд на Express + TypeScript.
 * Хранилище in-memory, все данные сбрасываются при перезапуске.
 */

import express from 'express';
import cors from 'cors';
import { eventTypesRouter } from './routes/eventTypes.js';
import { slotsRouter } from './routes/slots.js';
import { bookingsRouter } from './routes/bookings.js';

const PORT = Number(process.env.PORT) || 3001;

const app = express();

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:4173'] }));
app.use(express.json());

// Маршруты
app.use('/api/event-types', eventTypesRouter);
app.use('/api/event-types', slotsRouter);
app.use('/api/bookings', bookingsRouter);

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
