/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GET_IN_TOUCH_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
