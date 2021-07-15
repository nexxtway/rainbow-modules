import React, { useRef } from 'react';
import { Data, CallbackFn, DataObject } from '../types';

const useTableDataSource = (initialData: Data[] = []): DataObject | null => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onChangeCallback = useRef<CallbackFn>(() => {});
    const dataRef: React.RefObject<DataObject> = useRef({
        initialData,
        push: ({ data }) => onChangeCallback.current({ data, event: 'push' }),
        unshift: ({ data }) => onChangeCallback.current({ data, event: 'unshift' }),
        set: ({ data }) => onChangeCallback.current({ data, event: 'set' }),
        updateById: ({ id, data }) => onChangeCallback.current({ data, id, event: 'updateById' }),
        updateByIndex: ({ index, data }) =>
            onChangeCallback.current({ data, index, event: 'updateByIndex' }),
        deleteById: ({ id }) => onChangeCallback.current({ id, event: 'deleteById' }),
        deleteByIndex: ({ index }) => onChangeCallback.current({ index, event: 'deleteByIndex' }),
        onChange: (callback: CallbackFn) => {
            onChangeCallback.current = callback;
        },
    });

    return dataRef.current;
};

export default useTableDataSource;
