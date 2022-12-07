import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Confetti extends Command {
    public override command = 'confetti';
    public override help = 'Show confetti in Ray!';

    public override handle(argv: Argv) {
        if (super.handle(argv) === false) {
            return false;
        }

        const instance = Ray.create(this.client, this.uuid ?? argv['uuid'] ?? null);

        instance.confetti();

        super.afterHandle(instance);
    }
}
