// File: /src/utils/Logger.ts
export class Logger {
    static log(message: string, level: 'INFO' | 'DEBUG' | 'ERROR' = 'INFO'): void {
      // TODO: Implement logging logic
      console.log(`[${level}] ${message}`);
    }
  }