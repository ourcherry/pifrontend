import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        proxy: {
            '/video': {
                target: 'http://192.168.0.27:5000', // Flask 서버 주소
                changeOrigin: true,
                secure: false, // https를 사용하지 않는 경우
            },
            '/capture': {
                target: 'http://192.168.0.27:5000', // Flask 서버 주소
                changeOrigin: true,
                secure: false, // https를 사용하지 않는 경우
            },
        },
    },
});
