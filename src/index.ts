// src/index.ts

import express, { Request, Response } from 'express';
import { sumAllOfTheWorld } from './sum';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my Node.js + TypeScript API!');
});

app.post('/sumAllOfTheWorld', (req: Request, res: Response) => {
  const { first, second } = req.body;

  if (typeof first !== 'number' || typeof second !== 'number') {
    return res.status(400).json({
      error: 'first ve second sayı olmalı',
    });
  }

  const result = sumAllOfTheWorld(first, second);
  return res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});

export default app;
