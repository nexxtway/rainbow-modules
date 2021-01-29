export default function filterByFields<T>(params: {
    data: Array<T>;
    query: string;
    fields: Array<string>;
}): Array<T>;
