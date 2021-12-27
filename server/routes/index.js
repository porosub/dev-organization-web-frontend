import express from 'express';
const router = express.Router();
import { scrapePost } from '../services/scraper';

/* GET home page. */
router.get('/', scrapePost);

export default router;
