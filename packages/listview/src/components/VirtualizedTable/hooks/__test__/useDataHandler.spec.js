import { renderHook, act } from '@testing-library/react-hooks';
import useDataHandler from '../useDataHandler';
import useTableDataSource from '../useTableDataSource';

describe('useDataHandler', () => {
    it('should return the correct initial data', () => {
        const {
            result: { current: data },
        } = renderHook(() => useTableDataSource([]));
        const dataHandler = renderHook(() => useDataHandler(data));
        expect(dataHandler.result.current).toEqual([
            [],
            undefined,
            { current: null },
            { current: null },
        ]);
    });

    it('should add the new data at the end', () => {
        const {
            result: { current: data },
        } = renderHook(() => useTableDataSource([{ name: 'Test' }]));
        const dataHandler = renderHook(() => useDataHandler(data));
        act(() => {
            data.push([{ name: 'Test 2' }]);
        });
        const [currentData] = dataHandler.result.current;
        expect(currentData).toEqual([{ name: 'Test' }, { name: 'Test 2' }]);
    });

    it('should add the new data at the begining', () => {
        const {
            result: { current: data },
        } = renderHook(() => useTableDataSource([{ name: 'Test' }]));
        const dataHandler = renderHook(() => useDataHandler(data));
        act(() => {
            data.unshift([{ name: 'Test 2' }]);
        });
        const [currentData] = dataHandler.result.current;
        expect(currentData).toEqual([{ name: 'Test 2' }, { name: 'Test' }]);
    });

    it('should replace the existing data with the new', () => {
        const {
            result: { current: data },
        } = renderHook(() => useTableDataSource([{ name: 'Test' }]));
        const dataHandler = renderHook(() => useDataHandler(data));
        act(() => {
            data.update([{ name: 'Test 2' }]);
        });
        const [currentData] = dataHandler.result.current;
        expect(currentData).toEqual([{ name: 'Test 2' }]);
    });

    it('should insert the new data on the correct position', () => {
        const {
            result: { current: data },
        } = renderHook(() => useTableDataSource([{ name: 'Test 0' }, { name: 'Test 2' }]));
        const dataHandler = renderHook(() => useDataHandler(data));
        act(() => {
            data.insert([{ name: 'Test 1' }], 1);
        });
        const [currentData] = dataHandler.result.current;
        expect(currentData).toEqual([{ name: 'Test 0' }, { name: 'Test 1' }, { name: 'Test 2' }]);
    });

    it('should remove the data in the provided range', () => {
        const {
            result: { current: data },
        } = renderHook(() =>
            useTableDataSource([{ name: 'Test 0' }, { name: 'Test 1' }, { name: 'Test 2' }]),
        );
        const dataHandler = renderHook(() => useDataHandler(data));
        act(() => {
            data.delete(1, 2);
        });
        const [currentData] = dataHandler.result.current;
        expect(currentData).toEqual([{ name: 'Test 0' }]);
    });
});
