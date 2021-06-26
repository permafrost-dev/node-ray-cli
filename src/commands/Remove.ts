import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Remove extends Command {
    public override command = 'remove <uuid>';
    public override help = 'Remove a previously sent payload';

    public override handle(argv: Argv) {
        super.handle(argv);

        const instance = Ray.create(this.client, argv['uuid']);

        instance.uuid = argv['uuid'];

        instance.remove();
    }
}
