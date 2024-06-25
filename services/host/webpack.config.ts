import path from 'path';
import { BuildModeType, BuildPlatformType, buildWebpack, IBuildPath } from '@packages/build-config';
import webpack from 'webpack';
import packageJson from './package.json';

interface EnvVariables {
    mode?: BuildModeType;
    port?: number;
    platform?: BuildPlatformType;
    analyzer?: boolean;
    SHOP_REMOTE_URL?: string;
    ADMIN_REMOTE_URL?: string;
}

export default (env: EnvVariables) => {
    const paths: IBuildPath = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }

    const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? 'http://localhost:3001';
    const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? 'http://localhost:3002';

    const config = buildWebpack({
        mode: env.mode ?? 'development',
        port: env.port ?? 3000,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop',
        paths
    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
            shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
            admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true,
            },
            'react-router-dom': {
                eager: true,
            },
            'react-dom': {
                eager: true,
            }
        }
    }))

    return config;
}