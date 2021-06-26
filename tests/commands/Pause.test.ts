/* eslint-disable no-undef */
import { Pause } from '@/commands/Pause';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: Pause;

beforeEach(() => {
    client = new FakeClient();

    command = new Pause();
    command.uuid = 'fakeUuid';
    command.client = client;
});

it('has the correct name', () => {
    expect(command.name()).toBe('pause');
});

it('sends an pause payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['pause'], quiet: true }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
