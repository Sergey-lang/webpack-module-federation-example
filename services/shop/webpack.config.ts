import path from 'path';
import { BuildModeType, BuildPlatformType, buildWebpack, IBuildPath } from '@packages/build-config';
import webpack from 'webpack';
import packageJson from './package.json';

interface EnvVariables {
    mode?: BuildModeType;
    port?: number;
    platform?: BuildPlatformType;
    analyzer?: boolean;
}

export default (env: EnvVariables) => {
    const paths: IBuildPath = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }

    const config = buildWebpack({
        mode: env.mode ?? 'development',
        port: env.port ?? 3001,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop',
        paths
    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'shop',
        filename: 'remoteEntry.js', // connected file name
        exposes: {
            './Router': './src/router/Router.tsx', // give our route outside service
        },
        shared: { // shared libs
            ...packageJson.dependencies,
            react: {
                eager: true, // load at start options
                requiredVersion: packageJson.dependencies['react'],
            },
            'react-router-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-router-dom'],
            },
            'react-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-dom'],
            }
        }
    }))

    return config;
}