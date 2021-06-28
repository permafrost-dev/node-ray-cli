export function classOf<T>(o: T): any {
    return (o as any).constructor;
}

export function isString(arg: any): boolean {
    return typeof arg === 'string';
}

export function createClass<T>(o: T): any {
    return new (o as any)();
}

export function kebabCase(str: string): string {
    const matches = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

    if (!matches) {
        return str;
    }

    return matches.map(x => x.toLowerCase()).join('-');
}
