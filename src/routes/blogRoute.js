import { Router } from 'express';
// eslint-disable-next-line camelcase, import/extensions
import blog_get from '../controllers/blogController.js';

const router = Router();

router.get('/blog', blog_get);

export default router;
