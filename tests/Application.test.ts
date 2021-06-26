/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { Application } from '@/Application';
import { Color } from '@/commands/Color';
import { FakeClient } from './TestClasses/FakeClient';
import { FakeYargs } from './TestClasses/FakeYargs';

let yargs: FakeYargs;
let client: FakeClient;
let app: Application;

beforeEach(() => {
    client = new FakeClient();
    yargs = new FakeYargs();
    app = new Application(yargs, client, 'fakeUuid');
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

it('sets a help option', () => {
    app.help('h');

    expect(yargs.helpOption).toBe('h');
});

it('gets the yargs argv prop', () => {
    yargs.argv = { a: 1, b: 2 };

    expect(app.argv).toStrictEqual(yargs.argv);
});

it('runs the application', () => {
    yargs.argv = { _: [] };

    app.run([new Color()]);

    expect(yargs.commandList).toMatchSnapshot();
    expect(yargs.aliases).toMatchSnapshot();
    expect(yargs.helpOption).toMatchSnapshot();
});

it('runs the application and uses send as the default command', () => {
    yargs.argv = { _: ['test message'] };

    app.run([new Color()]);

    expect(client.sentPayloads()).toMatchSnapshot();
});
