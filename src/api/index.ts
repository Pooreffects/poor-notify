import express from 'express';

import NotifyResponse from '../interfaces/NotifyResponse';
import notify from './notify';

const router = express.Router();

router.get<{}, NotifyResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/notify', notify);

export default router;
