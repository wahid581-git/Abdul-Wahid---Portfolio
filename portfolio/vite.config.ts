import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites from /<repo-name>/
// Change base to '/' if you deploy to a custom domain or a <username>.github.io root repo.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
