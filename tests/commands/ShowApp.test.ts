/* eslint-disable no-undef */
import { ShowApp } from '@/commands/ShowApp';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: ShowApp;

beforeEach(() => {
    client = new FakeClient();

    command = new ShowApp();
    command.client = client;
    command.uuid = 'fakeUuid';
});

it('has the correct name', () => {
    expect(command.name()).toBe('show-app');
});

it('sends a show app payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['show-app'], quiet: true }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
