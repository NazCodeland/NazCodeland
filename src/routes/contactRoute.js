import { Router } from 'express';
// eslint-disable-next-line camelcase, import/extensions
import contact_get from '../controllers/contactController.js';

const router = Router();

router.get('/contact', contact_get);

export default router;
