import express from 'express';
import { save, uploadFile } from '../../controllers/front/CareerController';

const router = express.Router();

// Apply middleware before the controller
router.post('/', uploadFile, save);

export default router;
