/* eslint-disable import/prefer-default-export */
let counter = 0;
export const uniqueId = (): string => {
    counter += 1;
    return `number-${counter}`;
};
