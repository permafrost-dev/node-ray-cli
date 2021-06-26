/* eslint-disable no-undef */
import { Remove } from '@/commands/Remove';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: Remove;

beforeEach(() => {
    client = new FakeClient();

    command = new Remove();
    command.uuid = 'fakeUuid';
    command.client = client;
});

it('has the correct name', () => {
    expect(command.name()).toBe('remove');
});

it('sends a remove payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['remove'], quiet: true, uuid: 'fakeUuid' }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
