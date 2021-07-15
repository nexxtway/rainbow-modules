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
            data.push({ data: [{ name: 'Test 2' }] });
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
            data.unshift({ data: [{ name: 'Test 2' }] });
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
            data.set({ data: [{ name: 'Test 2' }] });
        });
        const [currentData] = dataHandler.result.current;
        expect(currentData).toEqual([{ name: 'Test 2' }]);
    });

    it('should update the item with the passed id', () => {
        const {
            result: { current: data },
        } = renderHook(() => useTableDataSource([{ id: 'test', name: 'Test' }]));
        const dataHandler = renderHook(() => useDataHandler(data));
        act(() => {
            data.updateById({ id: 'test', data: { name: 'Updated test' } });
        });
        const [currentData] = dataHandler.result.current;
        expect(currentData).toEqual([{ name: 'Updated test' }]);
    });

    it('should update the item in the passed position', () => {
        const {
            result: { current: data },
        } = renderHook(() => useTableDataSource([{ name: 'Test' }]));
        const dataHandler = renderHook(() => useDataHandler(data));
        act(() => {
            data.updateByIndex({ index: 0, data: { name: 'Updated test' } });
        });
        const [currentData] = dataHandler.result.current;
        expect(currentData).toEqual([{ name: 'Updated test' }]);
    });

    it('should remove the item with the passed id', () => {
        const {
            result: { current: data },
        } = renderHook(() => useTableDataSource([{ id: 'test', name: 'Test' }]));
        const dataHandler = renderHook(() => useDataHandler(data));
        act(() => {
            data.deleteById({ id: 'test' });
        });
        const [currentData] = dataHandler.result.current;
        expect(currentData).toEqual([]);
    });

    it('should remove the item in the passed index', () => {
        const {
            result: { current: data },
        } = renderHook(() => useTableDataSource([{ name: 'Test' }]));
        const dataHandler = renderHook(() => useDataHandler(data));
        act(() => {
            data.deleteByIndex({ index: 0 });
        });
        const [currentData] = dataHandler.result.current;
        expect(currentData).toEqual([]);
    });
});
