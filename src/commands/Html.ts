import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class Html extends Command {
    public override command = 'html [content]';
    public override help = 'Display rendered html content in Ray';

    public override handle(argv: Argv) {
        super.handle(argv);

        const instance = Ray.create(this.client, this.uuid ?? argv['uuid']);

        let content: string = argv['content'];
        const readFromStdin = argv['stdin'] ?? false;

        if (readFromStdin) {
            content = '';

            process.stdin.setEncoding('utf8');

            process.stdin.on('readable', function () {
                const chunk = process.stdin.read();
                if (chunk !== null) {
                    content += chunk;
                }
            });

            process.stdin.on('end', () => {
                console.log('end');
                instance.html(content);
                super.displayUuid(instance);
            });

            return;
        }

        instance.html(content);

        super.displayUuid(instance);
    }
}
