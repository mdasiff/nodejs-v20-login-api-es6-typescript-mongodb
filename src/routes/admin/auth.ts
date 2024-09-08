import express from 'express';
import { auth, check } from '../../controllers/admin/AuthController';

const router = express.Router();

// Apply middleware before the controller
router.post('/auth', auth);
router.post('/auth/check', check);

export default router;