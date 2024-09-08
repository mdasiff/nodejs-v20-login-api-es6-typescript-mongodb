import express from 'express';
import { save } from '../../controllers/front/ContactController';

const router = express.Router();

router.post('/', save);

export default router;