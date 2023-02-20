import { Router } from 'express';
// eslint-disable-next-line camelcase, import/extensions
import blogController from '../controllers/blogController.js';

const router = Router();

router.get('/blog', blogController.blog_get);

router.get('/blog/create', blogController.createBlogPost_get);

router.get('/blog/:slug', blogController.blogPost_get);
router.post('/blog/create', blogController.createBlogPost_post);

export default router;
