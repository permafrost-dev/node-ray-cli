import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Send extends Command {
    public override command = 'send <data>';
    public override help = 'send some data to Ray';

    public builder = () => {
        return {
            red: { default: false },
            blue: { default: false },
            green: { default: false },
            orange: { default: false },
            purple: { default: false },
            gray: { default: false },
            hide: { default: false },
        };
    };

    public override handle(argv: Argv) {
        if (super.handle(argv) === false) {
            return false;
        }

        const instance = Ray.create(this.client, this.uuid).send(argv['data']);

        if (typeof argv['hide'] !== 'undefined' && <boolean>(<unknown>argv['hide']) === true) {
            instance.hide();
        }

        const colorNames = ['red', 'blue', 'green', 'orange', 'purple', 'gray'];

        colorNames.forEach(colorName => {
            if (typeof argv[colorName] !== 'undefined' && argv[colorName] === true) {
                instance.color(colorName);
            }
        });

        super.displayUuid(instance);
    }
}
