/* eslint-disable import/extensions */
import { Router } from 'express';
// eslint-disable-next-line camelcase
import homePage_get from '../controllers/homePageController.js';

const router = Router();

router.get('/', homePage_get);

export default router;
