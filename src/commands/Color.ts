import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Color extends Command {
    public override command = 'color <uuid> <color>';
    public override help = 'change to color of a previously sent payload';

    public builder = () => {
        return {
            red: { default: false },
            blue: { default: false },
            green: { default: false },
            orange: { default: false },
            purple: { default: false },
        };
    };

    public override handle(argv: Argv) {
        const instance = Ray.create(null, argv['uuid']);

        instance.uuid = argv['uuid'];

        instance.color(argv['color']);

        console.log(instance.uuid);
    }
}
