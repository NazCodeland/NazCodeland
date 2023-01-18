/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import { Router } from 'express';
import {
  design_get,
  development_get,
} from '../controllers/portfolioControllers.js';

const router = Router();

router.get('/design', design_get);
router.get('/development', development_get);

export default router;
