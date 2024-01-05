import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  __APP_INFO__: JSON.stringify({
    name: "01vitereact",
    // ... other fields ...
  }),
});
