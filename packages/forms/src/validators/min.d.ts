export default function (
    minValue: number,
    errorMessage?: string | ((...arg) => string),
): (...arg) => string | undefined;
