import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Notify extends Command {
    public override command = 'notify <message>';
    public override help = 'Display a desktop notification from Ray';

    public override handle(argv: Argv) {
        if (super.handle(argv) === false) {
            return false;
        }

        const instance = Ray.create(this.client, this.uuid ?? argv['uuid']);

        instance.notify(argv['message']);

        super.displayUuid(instance);
    }
}
