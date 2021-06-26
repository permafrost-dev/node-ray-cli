import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class ShowApp extends Command {
    public override command = 'show-app';
    public override help = 'Show the Ray application';

    public override handle(argv: Argv) {
        super.handle(argv);

        const instance = Ray.create(this.client, this.uuid);

        instance.showApp();
    }
}
