import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Clear extends Command {
    public override command = 'clear';
    public override help = 'clear the current Ray screen';

    public override handle(argv: Argv) {
        if (super.handle(argv) === false) {
            return false;
        }

        const instance = Ray.create(this.client, this.uuid);

        instance.clearScreen();
    }
}
