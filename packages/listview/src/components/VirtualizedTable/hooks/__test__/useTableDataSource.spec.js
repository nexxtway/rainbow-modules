import { renderHook } from '@testing-library/react-hooks';
import useTableDataSource from '../useTableDataSource';

describe('useTableDataSource', () => {
    it('should return an object containing the initial data passed', () => {
        const initialData = [
            {
                name: 'Test',
            },
        ];
        const { result } = renderHook(() => useTableDataSource(initialData));
        expect(result.current.initialData).toEqual(initialData);
    });

    it('should call onChange callback when an action is invoked', () => {
        const initialData = [
            {
                name: 'Test',
            },
        ];
        const onChangeFn = jest.fn();
        const { result } = renderHook(() => useTableDataSource(initialData));
        result.current.onChange(onChangeFn);

        const newData = [
            {
                name: 'Test 2',
            },
        ];
        const actions = ['push', 'unshift', 'update', 'insert', 'delete'];
        const args = [[newData], [newData], [newData], [newData, 1], [1, 1]];
        const expectedArgs = [
            {
                event: 'push',
                data: newData,
            },
            {
                event: 'unshift',
                data: newData,
            },
            {
                event: 'update',
                data: newData,
            },
            {
                event: 'insert',
                data: newData,
                index: 1,
            },
            {
                event: 'delete',
                data: [],
                index: 1,
                deleteCount: 1,
            },
        ];
        actions.forEach((action, index) => {
            result.current[action](...args[index]);
            expect(onChangeFn).toHaveBeenCalledWith(expectedArgs[index]);
            onChangeFn.mockClear();
        });
    });
});
