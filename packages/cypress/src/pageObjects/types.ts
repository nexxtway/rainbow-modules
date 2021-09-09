export interface AssertMap {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [chainer: string]: (chainer: string, ...args: any[]) => void;
}
