import { Command } from './Command';
import { Argv } from 'yargs';
import { Ray } from 'node-ray';

export class ClearAll extends Command {
    public override command = 'clear-all';
    public override help = 'Clear current and all previous Ray screens';

    public override handle(argv: Argv) {
        if (super.handle(argv) === false) {
            return false;
        }

        const instance = Ray.create(this.client, this.uuid ?? argv['uuid'] ?? null);

        instance.clearAll();

        super.afterHandle(instance);
    }
}
