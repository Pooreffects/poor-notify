import express from 'express';

const router = express.Router();

type NotifyResponse = string[];

router.get<{}, NotifyResponse>('/', (req, res) => {
  res.json(['blogPost-1', 'blogPost-2', 'blogPost-3']);
});

export default router;
