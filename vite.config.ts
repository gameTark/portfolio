/// <reference types="vitest" />
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
})
