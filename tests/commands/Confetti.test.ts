/* eslint-disable no-undef */
import { Confetti } from '@/commands/Confetti';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: Confetti;

beforeEach(() => {
    client = new FakeClient();

    command = new Confetti();
    command.uuid = 'fakeUuid';
    command.client = client;
});

it('has the correct name', () => {
    expect(command.name()).toBe('confetti');
});

it('sends a confetti payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['confetti'], quiet: true, uuid: 'fakeUuid' }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
