export interface Options {
    key?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function (opts: Options): [any, (value?: any) => void];
