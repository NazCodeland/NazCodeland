import { Router } from 'express';
// eslint-disable-next-line camelcase, import/extensions
import blogController from '../controllers/blogController.js';

const router = Router();

router.get('/blog', blogController.blog_get);

export default router;
