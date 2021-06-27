import { Command } from '@/commands/Command';
import { Argv } from 'yargs';

export class TestCommand extends Command {
    public override command = 'test-cmd';

    public override handle(argv: Argv) {
        if (super.handle(argv) === false) {
            return false;
        }

        super.displayUuid(this.uuid ?? 'fakeUuid');
    }
}
