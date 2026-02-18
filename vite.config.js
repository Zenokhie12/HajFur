import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'Hajar Furniture',
      short_name: 'HarFur',
      theme_color: '#800000',
      display: 'standalone',
      icons: [
        { src: 'Hajfur-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: 'Hajfur-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
      ]
      }
  })],
})
