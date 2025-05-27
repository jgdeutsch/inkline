import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // ← tell Vite to prefix all public asset URLs
  base: '/inkline/',

  plugins: [react()],
  // …any other config you have
})

