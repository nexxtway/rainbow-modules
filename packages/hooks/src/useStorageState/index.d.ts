export interface Options {
    /** This represents a string (must be unique) to identify where the value will be in the local storage. */
    key?: string;
    /** A default value to use when there is no value in the local storage under the key passed. */
    defaultValue?: unknown;
}

export default function (opts: Options): [unknown, (value?: unknown) => void];
