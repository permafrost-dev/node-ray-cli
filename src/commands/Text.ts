import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Text extends Command {
    public override command = 'text <data>';
    public override help = 'Display a text string that preserves whitespace';

    public override handle(argv: Argv) {
        if (super.handle(argv) === false) {
            return false;
        }

        const instance = Ray.create(this.client, this.uuid ?? argv['uuid']);

        instance.text(argv['data']);

        super.displayUuid(instance);
    }
}
