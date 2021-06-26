/* eslint-disable no-undef */
import { Json } from '@/commands/Json';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: Json;

beforeEach(() => {
    client = new FakeClient();

    command = new Json();
    command.uuid = 'fakeUuid';
    command.client = client;
});

it('has the correct name', () => {
    expect(command.name()).toBe('json');
});

it('sends an image payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['json'], quiet: true, data: '["one", "two"]' }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
