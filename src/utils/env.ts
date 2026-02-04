import * as fs from 'fs';

export function getEnv(key: string): string {
  return process.env[key] || '';
}
