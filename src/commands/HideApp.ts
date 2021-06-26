import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class HideApp extends Command {
    public override command = 'hide-app';
    public override help = 'Hide the Ray application';

    public override handle(argv: Argv) {
        super.handle(argv);

        const instance = Ray.create(this.client, null);

        instance.hideApp();
    }
}
