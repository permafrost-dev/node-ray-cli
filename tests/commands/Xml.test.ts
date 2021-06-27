/* eslint-disable no-undef */
import { Xml } from '@/commands/Xml';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: Xml;

beforeEach(() => {
    client = new FakeClient();

    command = new Xml();
    command.uuid = 'fakeUuid';
    command.client = client;
});

it('has the correct name', () => {
    expect(command.name()).toBe('xml');
});

it('sends an xml payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['xml'], quiet: true, data: '<one><two></two></one>' }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
