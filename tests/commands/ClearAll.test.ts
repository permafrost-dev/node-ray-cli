/* eslint-disable no-undef */
import { ClearAll } from '@/commands/ClearAll';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: ClearAll;

beforeEach(() => {
    client = new FakeClient();

    command = new ClearAll();
    command.uuid = 'fakeUuid';
    command.client = client;
});

it('has the correct name', () => {
    expect(command.name()).toBe('clear-all');
});

it('sends a clear all payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['clear-all'], quiet: true, uuid: 'fakeUuid' }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
