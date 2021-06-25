/* eslint-disable no-undef */
import { Color } from '@/commands/Color';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: Color;

beforeEach(() => {
    client = new FakeClient();

    command = new Color();
    command.client = client;
});

it('has the correct name', () => {
    expect(command.name()).toBe('color');
});

it('sends a color payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['color'], quiet: true, uuid: 'fakeUuid', color: 'red' }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
