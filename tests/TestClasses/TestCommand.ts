import { Command } from '@/commands/Command';

export class TestCommand extends Command {
    public override command = 'test-cmd';

    // public override builder = (): Record<string, any> => {
    //     return {
    //         one: {
    //             type: 'number'
    //         }
    //     };
    // };
}
