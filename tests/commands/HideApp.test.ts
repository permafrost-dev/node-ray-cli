/* eslint-disable no-undef */
import { HideApp } from '@/commands/HideApp';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: HideApp;

beforeEach(() => {
    client = new FakeClient();

    command = new HideApp();
    command.uuid = 'fakeUuid';
    command.client = client;
});

it('has the correct name', () => {
    expect(command.name()).toBe('hide-app');
});

it('sends a hide app payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['hide-app'], quiet: true }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
