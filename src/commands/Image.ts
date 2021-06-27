import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Image extends Command {
    public override command = 'image <location>';
    public override help = 'Display an image in Ray';

    public override handle(argv: Argv) {
        if (super.handle(argv) === false) {
            return false;
        }

        const instance = Ray.create(this.client, this.uuid ?? argv['uuid']);

        instance.image(argv['location']);

        super.displayUuid(instance);

        super.afterHandle(instance);
    }
}
