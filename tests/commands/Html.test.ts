/* eslint-disable no-undef */
import { Html } from '@/commands/Html';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: Html;

beforeEach(() => {
    client = new FakeClient();

    command = new Html();
    command.uuid = 'fakeUuid';
    command.client = client;
});

it('has the correct name', () => {
    expect(command.name()).toBe('html');
});

it('sends an html payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['html'], quiet: true, content: '<strong>test data</strong>' }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
