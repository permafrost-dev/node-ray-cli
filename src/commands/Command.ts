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

        this.stdout = stdout ?? process.stdout;
    }

    public name(): string {
        return <string>this.command.split(' ').shift();
    }

    public builder = (): Record<string, any> => {
        return {};
    };

    public handle(argv: Argv) {
        this.argv = argv;
    }

    public hasArgument(name: string): boolean {
        const argv = this.argv ?? {};

        return typeof argv[name] !== 'undefined';
    }

    public getArgument(name: string, defaultValue: any = null): any {
        const argv = this.argv ?? {};

        return argv[name] ?? defaultValue;
    }

    public displayUuid(instance: Ray | string) {
        const uuid: string = isString(instance) ? <string>instance : (<Ray>instance).uuid;

        if (this.getArgument('show-uuid', false) === true) {
            this.stdout.write(`${uuid}\n`);
        }
    }
}
