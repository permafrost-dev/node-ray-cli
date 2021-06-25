import { Application } from './Application';
import { Color } from './commands/Color';
import { Send } from './commands/Send';

const commands = [new Color(), new Send()];

const app = new Application();

commands.forEach(command => {
    app.commandClass(command);
});

app.help('h').alias('h', 'help');

const argv = app.argv;

if (argv['_'].length === 1) {
    const commandNames = commands.map(command => command.name());

    if (!commandNames.includes(argv['_'][0] ?? '')) {
        argv['data'] = argv['_'][0];
        new Send().handle(argv);
    }
} else {
    app.y.showHelp();
}
