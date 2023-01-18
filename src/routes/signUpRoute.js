/* eslint-disable import/no-unresolved */
import { Router } from 'express';
// eslint-disable-next-line camelcase, import/extensions
import signUp_get from '../controllers/signUpController.js';

const router = Router();

router.get('/signUp', signUp_get);

export default router;
