import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class File extends Command {
    public override command = 'file <filename>';
    public override help = 'Display the contents of a file in Ray';

    public override handle(argv: Argv) {
        if (super.handle(argv) === false) {
            return false;
        }

        const instance = Ray.create(this.client, this.uuid ?? argv['uuid']);

        instance.file(argv['filename']);

        super.displayUuid(instance);

        super.afterHandle(instance);
    }
}
