import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Size extends Command {
    public override command = 'size <uuid> <size>';
    public override help = 'Change the text size of a previously sent payload (large/small)';

    public override handle(argv: Argv) {
        if (super.handle(argv) === false) {
            return false;
        }
        const instance = Ray.create(this.client, argv['uuid']);

        instance.uuid = argv['uuid'];

        instance.size(argv['size']);

        super.displayUuid(instance);

        super.afterHandle(instance);
    }
}
