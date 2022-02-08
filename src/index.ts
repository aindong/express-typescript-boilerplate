import express, { Request, Response } from 'express';

const app = express();

app.get('/', (_: Request, res: Response): void => {
  res.json({ message: 'Hello World' });
});

app.listen('3001', () => {
  console.log('Server is running on port 3001');
});
