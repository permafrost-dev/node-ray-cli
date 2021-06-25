/* eslint-disable no-undef */
import { Send } from '@/commands/Send';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: Send;

beforeEach(() => {
    client = new FakeClient();

    command = new Send();
    command.uuid = 'fakeUuid';
    command.client = client;
});

it('sends a payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['send'], quiet: true, data: 'test data' }));

    expect(client.sentPayloads()).toMatchSnapshot();
});

it('sends a payload with color', () => {
    command.handle(<Argv>(<unknown>{ _: ['send'], quiet: true, data: 'test data', red: true }));

    expect(client.sentPayloads()).toMatchSnapshot();
});

it('sends a collapsed payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['send'], quiet: true, data: 'test data', hide: true }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
