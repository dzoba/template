import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const { plugin: mdPlugin, Mode } = require('vite-plugin-markdown')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdPlugin({ mode: [Mode.HTML, Mode.TOC, Mode.REACT] })]
})
