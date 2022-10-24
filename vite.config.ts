import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import autoImport from 'unplugin-auto-import/vite';
import components from 'unplugin-vue-components/vite';
import { VexipUIResolver } from '@vexip-ui/plugins';
import { resolve } from 'path'; // 新增
import { viteMockServe } from 'vite-plugin-mock'; // 新增

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        autoImport({
            vueTemplate: true,
            resolvers: [VexipUIResolver()],
            imports: [
                // {
                //   '@vexip-ui/icons': Object.keys(await import('@vexip-ui/icons')).map(name =>
                //     name.match(/^I[0-9]/) ? name : [name, `I${name}`]
                //   )
                // }
                'vue',
                'vue-router',
                'pinia'
            ],
        }),
        components({
            resolvers: [VexipUIResolver()],
            dirs: ['src/Layout/','src/views/'],
        }),
        //引入mock
        viteMockServe({
            supportTs: true,
            logger: false,
            mockPath: './src/mock/', // 解析刚刚user.ts的位置
            localEnabled: true, // 是否开启开发环境
        }),
    ],
    //设置src别名
    resolve: {
        //设置别名
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    server: {
        // 新增
        port: 3000, //启动端口
        hmr: {
            host: '127.0.0.1',
            port: 3000,
        },
        // 设置 https 代理
        proxy: {
            '/api': {
                target: 'http://localhost:3000', // 后端 api 地址
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, ''),
            },
        },
    },
});
