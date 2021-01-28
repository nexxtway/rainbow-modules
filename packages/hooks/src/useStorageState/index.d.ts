export interface Options {
    key?: string;
    defaultValue?: unknown;
}

export default function (opts: Options): [unknown, (value?: unknown) => void];
