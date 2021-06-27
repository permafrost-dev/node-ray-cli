import { Application } from './Application';
import { Clear } from './commands/Clear';
import { Color } from './commands/Color';
import { File } from './commands/File';
import { HideApp } from './commands/HideApp';
import { Html } from './commands/Html';
import { Image } from './commands/Image';
import { Json } from './commands/Json';
import { Notify } from './commands/Notify';
import { Pause } from './commands/Pause';
import { Remove } from './commands/Remove';
import { Send } from './commands/Send';
import { ShowApp } from './commands/ShowApp';
import { Text } from './commands/Text';
import { Xml } from './commands/Xml';

const commands = [
    new Clear(),
    new Color(),
    new File(),
    new HideApp(),
    new Html(),
    new Image(),
    new Json(),
    new Notify(),
    new Pause(),
    new Remove(),
    new Send(),
    new ShowApp(),
    new Text(),
    new Xml(),
];

// @ts-ignore
new Application().run(commands);
