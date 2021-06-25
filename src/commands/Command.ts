/* eslint-disable no-unused-vars */

import { classOf } from '@/lib/helpers';
import { Argv } from 'yargs';
export abstract class Command {
    public command = '';

    public help = '';

    public static instance: Command;

    constructor() {
        Command.instance = this;
    }

    public name(): string {
        return <string>this.command.split(' ').shift();
    }

    public builder = (): Record<string, any> => {
        return {};
    };

    public handle(argv: Argv) {
        //
    }

    public execute(argv) {
        if (!Command.instance.command.length) {
            throw new Error('Command string not defined!');
        }

        return Command.instance.handle(argv);
    }

    public static create(): Command {
        const thisClass = classOf(this);

        return new thisClass();
    }
}
