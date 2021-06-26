/* eslint-disable no-undef */
import { Notify } from '@/commands/Notify';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: Notify;

beforeEach(() => {
    client = new FakeClient();

    command = new Notify();
    command.uuid = 'fakeUuid';
    command.client = client;
});

it('has the correct name', () => {
    expect(command.name()).toBe('notify');
});

it('sends an image payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['notify'], quiet: true, message: 'test message' }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
