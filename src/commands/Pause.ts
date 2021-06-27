import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Pause extends Command {
    public override command = 'pause';
    public override help = 'Pause code execution';

    // @ts-ignore
    public override async handle(argv: Argv) {
        if (super.handle(argv) === false) {
            return new Promise(resolve => resolve(false));
        }

        const instance = Ray.create(this.client, this.uuid ?? argv['uuid']);

        await instance.pause();

        super.afterHandle(instance);
    }
}
