import { Command } from './Command';
import { Argv } from 'yargs';

export class Hello extends Command {
    public override command = 'hello <name>';
    public override help = 'say hello to someone';

    public override handle(argv: Argv) {
        console.log(`hello ${argv.name}!`);
    }
}
