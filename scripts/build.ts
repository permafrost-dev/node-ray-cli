const { realpathSync, existsSync, statSync } = require('fs');
const { chdir } = require('process');
const { sep } = require('path');

class Options {
    public minify = process.env.NODE_ENV === 'production';
    public quiet = false;

    constructor(args) {
        if (args.includes('--prod') || args.includes('--production')) {
            this.minify = true;
        }

        if (args.includes('--dev') || args.includes('--development')) {
            this.minify = false;
        }

        if (args.includes('--quiet')) {
            this.quiet = true;
        }
    }
}

class Builder {
    public build(baseDir: string, pkg: any, options: Options) {
        chdir(baseDir);

        const buildConfig = {
            entryPoints: [`${baseDir}/src/index.ts`],
            bundle: true,
            outfile: `${baseDir}/${pkg.main}`,
            write: true,
            platform: 'node',
            format: 'cjs',
            target: ['node14'],
            define: {
                __APP_VERSION__: `"${pkg.version}"`,
            },
            logLevel: 'error',
            minify: options.minify,
        };

        const start = new Date().getTime();
        const result = require('esbuild').buildSync(buildConfig);
        const elapsed = new Date().getTime() - start;

        return {
            error: typeof result['errors'] !== 'undefined' && result.errors.length,
            elapsed,
            buildConfig,
        };
    }
}

class BuildScript {
    public args;
    public baseDir;
    public pkg;

    constructor(argv: any, dirname: string | null = null) {
        dirname = dirname ?? __dirname;

        this.args = argv.slice(2);
        this.baseDir = realpathSync(`${dirname}/..`);
        this.pkg = require(`${this.baseDir}/package.json`);
    }

    protected fileSize(fn) {
        if (!existsSync(fn)) {
            return `0.0 kb`;
        }

        const stat = statSync(fn);

        return ((stat.isFile() ? stat.size : 0.0) / 1024).toFixed(1) + ' kb';
    }

    public run() {
        const options = new Options(this.args);

        if (typeof this.pkg['main'] === 'undefined') {
            this.pkg['main'] = 'dist/ray.js';
        }

        const result = new Builder().build(this.baseDir, this.pkg, options);

        if (result.error) {
            if (!options.quiet) {
                console.log('* There were errors while building. Failed.');
                console.log(result['errors']);
            }

            process.exit(1);
        }

        if (!options.quiet) {
            console.log(
                `* Build completed in ${result.elapsed}ms (${result.buildConfig.outfile.replace(this.baseDir + sep, '')} - ${this.fileSize(
                    result.buildConfig.outfile,
                )})`,
            );
            console.log(
                `* Version: ${result.buildConfig.define.__APP_VERSION__.replace(/"/g, '')} (${
                    options.minify ? 'production' : 'development'
                })`,
            );
            console.log('');
        }

        process.exit(0);
    }
}

new BuildScript(process.argv).run();
