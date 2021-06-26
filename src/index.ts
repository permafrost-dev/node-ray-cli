import { Application } from './Application';
import { Clear } from './commands/Clear';
import { Color } from './commands/Color';
import { File } from './commands/File';
import { HideApp } from './commands/HideApp';
import { Html } from './commands/Html';
import { Send } from './commands/Send';
import { ShowApp } from './commands/ShowApp';

const commands = [new Clear(), new Color(), new File(), new HideApp(), new Html(), new Send(), new ShowApp()];

new Application().run(commands);
