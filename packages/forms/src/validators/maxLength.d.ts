export default function (
    maxLengthValue: number,
    errorMessage?: string | ((...arg) => string),
): (...arg) => string | undefined;
