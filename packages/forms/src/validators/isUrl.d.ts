export default function (
    errorMessage?: string | ((...arg) => string),
): (...arg) => string | undefined;
