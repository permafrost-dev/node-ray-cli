import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Color extends Command {
    public override command = 'color <uuid> <color>';
    public override help = 'change to color of a previously sent payload';

    public override handle(argv: Argv) {
        super.handle(argv);

        const instance = Ray.create(this.client, argv['uuid']);

        instance.uuid = argv['uuid'];

        instance.color(argv['color']);

        this.displayUuid(instance);
    }
}
