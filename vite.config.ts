import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset URLs relative so the static build works under any
// subpath, on simple/static hosting, or opened from the filesystem. Paired
// with HashRouter, deep links like /#/condition/achilles resolve everywhere.
export default defineConfig({
  base: './',
  plugins: [react()],
})
