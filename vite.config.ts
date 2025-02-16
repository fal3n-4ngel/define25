import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'react-three-fiber': ['@react-three/fiber'],
          'react-three-drei': ['@react-three/drei']
        }
      }
    }
  },
  plugins: [
    tailwindcss(),
    react()],
})


