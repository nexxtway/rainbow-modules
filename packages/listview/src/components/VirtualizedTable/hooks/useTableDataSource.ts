import React, { useRef } from 'react';
import { Data, CallbackFn, DataObject } from '../types';

const useTableDataSource = (initialData: Data = []): DataObject | null => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onChangeCallback = useRef<CallbackFn>(() => {});
    const data: React.RefObject<DataObject> = useRef({
        initialData,
        push: (newData: Data) => onChangeCallback.current({ data: newData, event: 'push' }),
        unshift: (newData: Data) => onChangeCallback.current({ data: newData, event: 'unshift' }),
        update: (newData: Data) => onChangeCallback.current({ data: newData, event: 'update' }),
        insert: (newData: Data, index: number) =>
            onChangeCallback.current({ data: newData, event: 'insert', index }),
        delete: (index: number, deleteCount: number) =>
            onChangeCallback.current({ data: [], event: 'delete', index, deleteCount }),
        onChange: (callback: CallbackFn) => {
            onChangeCallback.current = callback;
        },
    });

    return data.current;
};

export default useTableDataSource;
