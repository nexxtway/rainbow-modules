import React, { useEffect, useRef, useState } from 'react';
import { Data, DataObject } from '../types';

const useDataHandler = (
    dataObj: DataObject | undefined,
): [
    data: Data[],
    itemPosition: number | undefined,
    prevStartIndex: React.MutableRefObject<number | null>,
    prevStopIndex: React.MutableRefObject<number | null>,
] => {
    const { initialData, onChange } = dataObj ?? {};
    const [data, setData] = useState<Data[]>(initialData ?? []);
    const [itemPosition, scrollToRow] = useState<number>();
    const prevStartIndex = useRef<number | null>(null);
    const prevStopIndex = useRef<number | null>(null);

    useEffect(() => {
        if (onChange) {
            onChange(({ event, data: newData, index, id }) => {
                if (Array.isArray(newData)) {
                    if (event === 'push' && newData) {
                        setData([...data, ...newData]);
                        return;
                    }
                    if (event === 'unshift' && newData) {
                        setData([...newData, ...data]);
                        scrollToRow(newData.length > 0 ? newData.length - 1 : newData.length);
                        setTimeout(() => scrollToRow(undefined));
                        return;
                    }
                    if (event === 'set' && newData) {
                        setData(newData);
                        scrollToRow(0);
                    }
                } else {
                    if (event === 'updateById' && newData) {
                        setData(
                            data.map((item) => {
                                const { id: itemId } = item;
                                if (id === itemId) return newData;
                                return item;
                            }),
                        );
                        return;
                    }
                    if (
                        event === 'updateByIndex' &&
                        index !== undefined &&
                        index >= 0 &&
                        index < data.length &&
                        newData
                    ) {
                        const arr = [...data];
                        arr.splice(index, 1, newData);
                        setData(arr);
                        return;
                    }
                    if (event === 'deleteById') {
                        setData(data.filter(({ id: itemId }) => id !== itemId));
                        return;
                    }
                    if (
                        event === 'deleteByIndex' &&
                        index !== undefined &&
                        index >= 0 &&
                        index < data.length
                    ) {
                        const arr = [...data];
                        arr.splice(index, 1);
                        setData(arr);
                    }
                }

                /*
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
                } */
            });
        }
    }, [onChange, data]);

    return [data, itemPosition, prevStartIndex, prevStopIndex];
};

export default useDataHandler;
