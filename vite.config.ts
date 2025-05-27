import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/inkline/',
  plugins: [react()],
  // …any other settings
})

