import express from 'express';

import NotifyResponse from '../interfaces/NotifyResponse';
import notify from './notify';
import subscribers from './subscribers';
import SubscribersResponse from '../interfaces/SubscribersResponse';

const router = express.Router();

router.get<{}, NotifyResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.get<{}, SubscribersResponse>('/', (req, res) => {
  res.json({
    message: 'Subs 🏃‍♂️',
  });
});

router.use('/notify', notify);
router.use('/subscribers', subscribers);

export default router;
