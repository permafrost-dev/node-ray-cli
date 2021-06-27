import { Command } from './commands/Command';
import { Send } from './commands/Send';

export class Application {
    public y;
    public client: any;

    constructor(yargs: any = null, client: any = null, uuid: string | null = null) {
        this.y = yargs ?? require('yargs')(process.argv.slice(2));
        this.client = client;
        try {
            this.client.uuid = uuid;
        } catch (err) {
            //
        }
    }

    public commandClass = (...cmdClasses: any) => {
        cmdClasses.forEach(instance => {
            instance.client = this.client;
            this.y = this.y.command(instance.command, instance.help, instance.builder, instance.handle);
        });

        return this;
    };

    public alias(name: string, alias: string) {
        this.y = this.y.alias(name, alias);

        return this;
    }

    public help(option: string | null = null) {
        this.y = this.y.help(option);

        return this;
    }

    get argv() {
        return this.y.argv;
    }

    public run(commands: Command[]) {
        this.y = this.y.scriptName('ray');
        // @ts-ignore
        this.y = this.y.version(__APP_VERSION__); // eslint-disable-line no-undef

        commands.forEach(command => {
            command.client = this.client;

            try {
                command.uuid = this.client.uuid;
            } catch (err) {
                //
            }

            this.commandClass(command);
        });

        this.help('h').alias('h', 'help');

        const argv = this.argv;

        if (argv['_'].length === 1) {
            const commandNames = commands.map(command => command.name());

            if (!commandNames.includes(argv['_'][0] ?? '')) {
                argv['data'] = argv['_'][0];

                const cmd = new Send();

                cmd.client = this.client;
                cmd.uuid = this.client?.uuid ?? null;
                cmd.handle(argv);
            }

            return;
        }

        if (process.env.NODE_ENV !== 'test') {
            this.y.showHelp();
        }
    }
}
