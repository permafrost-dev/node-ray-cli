import { Application } from './Application';
import { Clear } from './commands/Clear';
import { Color } from './commands/Color';
import { HideApp } from './commands/HideApp';
import { Send } from './commands/Send';

const commands = [new Clear(), new Color(), new HideApp(), new Send()];

new Application().run(commands);
