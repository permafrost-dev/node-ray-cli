/* eslint-disable no-unused-vars */

import { Argv } from 'yargs';
import { Ray } from 'node-ray';
import { WriteStream } from 'tty';
import { isString } from '@/lib/helpers';

export abstract class Command {
    public command = '';

    public help = '';

    public static instance: Command;

    public client: any = null;

    public uuid: string | null = null;

    public argv: Argv | any = null;

    public stdout: WriteStream | any;

    constructor(stdout: any = null) {
        Command.instance = this;

        Command.instance.stdout = stdout ?? process.stdout;
    }

    public name(): string {
        return <string>this.command.split(' ').shift();
    }

    public builder = (): Record<string, any> => {
        return {};
    };

    public handle(argv: Argv) {
        Command.instance.argv = argv;

        if (typeof process.env['NODE_RAY_DISABLED'] !== 'undefined' && process.env['NODE_RAY_DISABLED'] === '1') {
            return false;
        }

        const ifOption = Command.instance.getArgument('if', null);

        if (ifOption === 0 || ifOption === 'false' || ifOption === 'no') {
            return false;
        }
    }

    public hasArgument(name: string): boolean {
        const argv = Command.instance.argv ?? {};

        return typeof argv[name] !== 'undefined';
    }

    public getArgument(name: string, defaultValue: any = null): any {
        const argv = Command.instance.argv ?? {};

        return argv[name] ?? defaultValue;
    }

    public displayUuid(instance: Ray | string) {
        const uuid: string = isString(instance) ? <string>instance : (<Ray>instance).uuid;

        if (Command.instance.getArgument('show-uuid', false) === true) {
            Command.instance.stdout.write(`${uuid}\n`);
        }
    }

    public afterHandle(instance: Ray) {
        const colorNames = ['blue', 'gray', 'green', 'orange', 'purple', 'red'];

        const sizeNames = ['large', 'small'];

        colorNames.forEach(colorName => {
            if (Command.instance.getArgument(colorName, false) === true) {
                instance.color(colorName);
            }
        });

        sizeNames.forEach(sizeName => {
            if (Command.instance.getArgument(sizeName, false) === true) {
                instance.size(sizeName);
            }
        });

        if (Command.instance.getArgument('hide', false) === true) {
            instance.hide();
        }

        return;
    }
}
