import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Json extends Command {
    public override command = 'json <data>';
    public override help = 'Display formatted JSON in Ray';

    public override handle(argv: Argv) {
        if (super.handle(argv) === false) {
            return false;
        }

        const instance = Ray.create(this.client, this.uuid ?? argv['uuid']);

        instance.json(argv['data']);

        super.displayUuid(instance);

        super.afterHandle(instance);
    }
}
