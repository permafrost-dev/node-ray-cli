/* eslint-disable no-unused-vars */

export class FakeYargs {
    public commandList: any[] = [];
    public aliases: Record<string, string>[] = [];
    public helpOption: any = null;

    public argv = {};

    alias(name, alias) {
        this.aliases.push({ name, alias });

        return this;
    }

    command(name, description, options, handler) {
        this.commandList.push({
            name,
            description,
            options,
        });

        return this;
    }

    help(option) {
        this.helpOption = option;

        return this;
    }
}
