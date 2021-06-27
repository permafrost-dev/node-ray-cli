/* eslint-disable no-undef */
import { Text } from '@/commands/Text';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: Text;

beforeEach(() => {
    client = new FakeClient();

    command = new Text();
    command.uuid = 'fakeUuid';
    command.client = client;
});

it('has the correct name', () => {
    expect(command.name()).toBe('text');
});

it('sends a text payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['text'], quiet: true, data: ` test \n    message` }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
