import { defineConfig } from 'vite'
import react from 'npm i @swc/core@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
