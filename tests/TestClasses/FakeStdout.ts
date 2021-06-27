export class FakeStdout {
    public writtenData: string[] = [];

    public write(data: string): boolean {
        this.writtenData.push(data);

        return true;
    }
}
