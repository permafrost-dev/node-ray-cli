import { Command } from './Command';
import { Argv } from 'yargs';
import { ray } from 'node-ray';

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
        };
    };

    public override handle(argv: Argv) {
        const instance = ray(argv['data']);
        const colorNames = Object.keys(this.builder());

        colorNames.forEach(colorName => {
            if (typeof argv[colorName] !== 'undefined') {
                instance.color(colorName);
            }
        });

        console.log(instance.uuid);
    }
}
