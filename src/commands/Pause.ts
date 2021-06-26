import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Pause extends Command {
    public override command = 'pause';
    public override help = 'Pause code execution';

    public override async handle(argv: Argv) {
        super.handle(argv);

        const instance = Ray.create(this.client, this.uuid ?? argv['uuid']);

        await instance.pause();
    }
}
