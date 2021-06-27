/* eslint-disable no-undef */
import { FakeStdout } from '@tests/TestClasses/FakeStdout';
import { TestCommand } from '@tests/TestClasses/TestCommand';
import yargs, { Argv } from 'yargs';

let cmd: TestCommand;
let stdout: FakeStdout;

beforeEach(() => {
    stdout = new FakeStdout();
    cmd = new TestCommand(stdout);
});

it('gets the correct name from the command string', () => {
    expect(cmd.name()).toBe(cmd.command.split(' ').shift());
});

it('returns an empty builder object by default', () => {
    expect(Object.keys(cmd.builder())).toHaveLength(0);
});

it('displays the uuid if the correct argv flag is set', () => {
    cmd.argv = <Argv>(<unknown>{ 'show-uuid': true });

    cmd.displayUuid('fakeUuid');

    expect(stdout.writtenData).toMatchSnapshot();
});

it('does not display the uuid if the correct argv flag is not set', () => {
    cmd.argv = <Argv>(<unknown>{});

    cmd.displayUuid('fakeUuid');

    expect(stdout.writtenData).toHaveLength(0);
});

it('checks if an argument exists', () => {
    cmd.argv = <Argv>(<unknown>{ one: true });

    expect(cmd.hasArgument('one')).toBeTruthy();
    expect(cmd.hasArgument('two')).toBeFalsy();
});

it('gets the value of an existing argument', () => {
    cmd.argv = yargs.parse('--one=11 --two="two2" --verbose');

    expect(cmd.getArgument('one')).toBe(11);
    expect(cmd.getArgument('two')).toBe('two2');
    expect(cmd.getArgument('verbose')).toBeTruthy();
});

it('returns a default value when getting the value of a missing argument', () => {
    cmd.argv = <Argv>(<unknown>{});

    expect(cmd.getArgument('one', 11)).toBe(11);
    expect(cmd.getArgument('two', 'two2')).toBe('two2');
    expect(cmd.getArgument('verbose', false)).toBeFalsy();
    expect(cmd.getArgument('missing')).toBeNull();
});
