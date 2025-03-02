// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />

interface ImportMetaEnv {
  readonly SENDGRID_API_KEY: string;
  readonly SENDGRID_LIST_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
