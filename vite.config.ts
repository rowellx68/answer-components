import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import path from 'path'

const projectRootDir = path.resolve(__dirname);

export default defineConfig({
  alias: [
    {
      find: 'components',
      replacement: path.resolve(projectRootDir, 'src/components'),
    },
  ],
  plugins: [reactRefresh()],
})
