export default function (
    maxValue: number,
    errorMessage?: string | ((...arg) => string),
): (...arg) => string | undefined;
