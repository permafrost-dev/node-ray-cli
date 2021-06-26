/* eslint-disable no-undef */
import { File } from '@/commands/File';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: File;

beforeEach(() => {
    client = new FakeClient();

    command = new File();
    command.uuid = 'fakeUuid';
    command.client = client;
});

it('has the correct name', () => {
    expect(command.name()).toBe('file');
});

it('sends a file payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['file'], quiet: true, filename: __dirname + '/../fixtures/testfile.txt' }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
