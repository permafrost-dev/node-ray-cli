/* eslint-disable no-undef */
import { Image } from '@/commands/Image';
import { FakeClient } from '@tests/TestClasses/FakeClient';
import { Argv } from 'yargs';

let client: FakeClient;
let command: Image;

beforeEach(() => {
    client = new FakeClient();

    command = new Image();
    command.uuid = 'fakeUuid';
    command.client = client;
});

it('has the correct name', () => {
    expect(command.name()).toBe('image');
});

it('sends an image payload', () => {
    command.handle(<Argv>(<unknown>{ _: ['image'], quiet: true, location: 'https://placekitten.com/200/300' }));

    expect(client.sentPayloads()).toMatchSnapshot();
});
