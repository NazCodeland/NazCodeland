/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import { Router } from 'express';
import signIn_get from '../controllers/signInController.js';

const router = Router();

router.get('/signIn', signIn_get);

export default router;
