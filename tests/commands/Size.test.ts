/* eslint-disable no-undef */
import { Size } from '@/commands/Size';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: Size;

beforeEach(() => {
    client = new FakeClient();

    command = new Size();
    command.client = client;
});

it('has the correct name', () => {
    expect(command.name()).toBe('size');
});

it('sends a size payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['size'], quiet: true, uuid: 'fakeUuid', size: 'large' }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
