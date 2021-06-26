import { Application } from './Application';
import { Color } from './commands/Color';
import { Send } from './commands/Send';

const commands = [new Color(), new Send()];

new Application().run(commands);
