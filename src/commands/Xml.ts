import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Xml extends Command {
    public override command = 'xml <data>';
    public override help = 'Display formatted XML';

    public override handle(argv: Argv) {
        if (super.handle(argv) === false) {
            return false;
        }

        const instance = Ray.create(this.client, this.uuid ?? argv['uuid']);

        instance.xml(argv['data']);

        super.displayUuid(instance);

        super.afterHandle(instance);
    }
}
