/**
 * Vercel Web Analytics initialization for Gran Turismo
 * This script injects Vercel Analytics into the page
 */
import { inject } from '@vercel/analytics';

// Initialize analytics in production mode
inject({
  mode: 'production',
  debug: false
});
