import express from 'express';

const router = express.Router();

type SubscribersResponse = string[];

router.get<{}, SubscribersResponse>('/', (req, res) => {
  res.json(['subs-1', 'subs-2', 'subs-3']);
});

export default router;
