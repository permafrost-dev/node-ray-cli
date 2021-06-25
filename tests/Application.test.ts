/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { Application } from '@/Application';
import { FakeYargs } from './TestClasses/FakeYargs';

let yargs: FakeYargs;
let app: Application;

beforeEach(() => {
    yargs = new FakeYargs();
    app = new Application(yargs);
});

it('creates aliases', () => {
    app.alias('v', 'verbose');
    app.alias('V', 'version');

    expect(yargs.aliases).toHaveLength(2);
    expect(yargs.aliases).toMatchSnapshot();
});

it('adds commands', () => {
    const cmds = [
        { command: 'one', help: 'test one ', builder: () => ({}), handle: args => ({}) },
        { command: 'two', help: 'test two ', builder: () => ({}), handle: args => ({}) },
    ];

    cmds.forEach(cmd => app.commandClass(cmd));

    expect(yargs.commandList).toHaveLength(cmds.length);
    expect(yargs.commandList).toMatchSnapshot();
});
