/* eslint-disable no-undef */
import { Clear } from '@/commands/Clear';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: Clear;

beforeEach(() => {
    client = new FakeClient();

    command = new Clear();
    command.client = client;
});

it('has the correct name', () => {
    expect(command.name()).toBe('clear');
});

it('sends a clear payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['clear'], quiet: true, uuid: 'fakeUuid' }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
