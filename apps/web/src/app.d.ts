import type { Metadata } from "$lib/types/metadata";

declare global {
  namespace App {
    interface PageData {
      metadata?: Metadata;
    }
    interface Platform {
      env: WorkerEnv;
      cf: CfProperties;
      ctx: ExecutionContext;
    }
  }
}

export {};
