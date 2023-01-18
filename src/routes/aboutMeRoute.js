import { Router } from 'express';
// eslint-disable-next-line camelcase, import/extensions
import aboutMe_get from '../controllers/aboutMeController.js';

const router = Router();

router.get('/about', aboutMe_get);

export default router;
