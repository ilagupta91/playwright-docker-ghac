import { defineConfig } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({

  testDir: './src/tests',
  timeout: 30 * 1000,
  retries: 1,
  reporter: [['html'], ['list']],
  use: {
    baseURL: process.env.BASE_URL,
    //baseURL: 'https://google.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
});
