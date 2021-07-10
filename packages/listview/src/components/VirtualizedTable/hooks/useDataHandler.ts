import React, { useEffect, useRef, useState } from 'react';
import { Data, DataObject } from '../types';

const useDataHandler = (
    dataObj: DataObject | undefined,
): [
    data: Data,
    itemPosition: number | undefined,
    prevStartIndex: React.MutableRefObject<number | null>,
    prevStopIndex: React.MutableRefObject<number | null>,
] => {
    const { initialData, onChange } = dataObj ?? {};
    const [data, setData] = useState<Data>(initialData ?? []);
    const [itemPosition, scrollToRow] = useState<number>();
    const prevStartIndex = useRef<number | null>(null);
    const prevStopIndex = useRef<number | null>(null);

    useEffect(() => {
        if (onChange) {
            onChange(({ event, data: newData, index, deleteCount }) => {
                if (event === 'push') {
                    setData([...data, ...newData]);
                    return;
                }
                if (event === 'unshift') {
                    setData([...newData, ...data]);
                    scrollToRow(newData.length > 0 ? newData.length - 1 : newData.length);
                    setTimeout(() => scrollToRow(undefined));
                    return;
                }
                if (event === 'update') {
                    setData(newData);
                    scrollToRow(0);
                    return;
                }
                if (event === 'insert' && index) {
                    const arr = [...data];
                    arr.splice(index, 0, ...newData);
                    setData(arr);
                    const prevIndex = prevStartIndex.current ?? 0;
                    if (index < prevIndex) {
                        scrollToRow(prevIndex + newData.length);
                        setTimeout(() => scrollToRow(undefined));
                    }
                    return;
                }
                if (event === 'delete' && index) {
                    const arr = [...data];
                    arr.splice(index, deleteCount ?? 0);
                    setData(arr);
                    const prevIndex = prevStartIndex.current ?? 0;
                    if (index < prevIndex) {
                        scrollToRow(prevIndex - (deleteCount ?? 0));
                        setTimeout(() => scrollToRow(undefined));
                    }
                }
            });
        }
    }, [onChange, data]);

    return [data, itemPosition, prevStartIndex, prevStopIndex];
};

export default useDataHandler;
