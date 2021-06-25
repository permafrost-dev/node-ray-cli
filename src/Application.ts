//const yargs = require('yargs');

export class Application {
    public y = require('yargs')(process.argv.slice(2));

    public commandClass = (...cmdClasses: any) => {
        cmdClasses.forEach(instance => {
            //const instance = cmdClass();
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
}
