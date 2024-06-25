import path from 'path';
import { BuildModeType, BuildPlatformType, buildWebpack, IBuildPath } from '@packages/build-config';

interface EnvVariables {
    mode?: BuildModeType;
    port?: number;
    platform?: BuildPlatformType;
    analyzer?: boolean;
}

export default (env: EnvVariables) => {
    console.log('[Mode]: ', env.mode);
    console.log('[Port]: ', env.port);

    const paths: IBuildPath = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }

    return buildWebpack({
        mode: env.mode ?? 'development',
        port: env.port ?? 3000,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop',
        paths
    })
}