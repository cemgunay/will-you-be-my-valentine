import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Fake certification for localhost development
    basicSsl({
      /** name of certification */
      name: 'localhost',
      /** custom trust domains */
      domains: ['localhost'],
      /** custom certification directory */
      certDir: './certs',
    }),
  ],
  server: {
    https: {},
  },
})
