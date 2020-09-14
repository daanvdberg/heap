import { Express } from 'express';
import BookAPIs from './book';

// Combine various API routes
export default function(app: Express) {
	BookAPIs(app);
}