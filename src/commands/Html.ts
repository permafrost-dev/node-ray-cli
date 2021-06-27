import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Html extends Command {
    public override command = 'html [content]';
    public override help = 'Display rendered html content in Ray';

    public override handle(argv: Argv) {
        super.handle(argv);

        const instance = Ray.create(this.client, this.uuid ?? argv['uuid']);

        const content: string = argv['content'];

        instance.html(content);

        super.displayUuid(instance);
    }
}
