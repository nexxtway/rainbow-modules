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
        const actions = [
            'push',
            'unshift',
            'set',
            'updateById',
            'updateByIndex',
            'deleteById',
            'deleteByIndex',
        ];
        const args = [
            { data: newData },
            { data: newData },
            { data: newData },
            {
                id: 'test',
                data: {
                    name: 'Test 2',
                },
            },
            {
                index: 0,
                data: {
                    name: 'Test 2',
                },
            },
            { id: 'test' },
            { index: 0 },
        ];
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
                event: 'set',
                data: newData,
            },
            {
                event: 'updateById',
                data: {
                    name: 'Test 2',
                },
                id: 'test',
            },
            {
                event: 'updateByIndex',
                data: {
                    name: 'Test 2',
                },
                index: 0,
            },
            {
                event: 'deleteById',
                id: 'test',
            },
            {
                event: 'deleteByIndex',
                index: 0,
            },
        ];
        actions.forEach((action, index) => {
            result.current[action](args[index]);
            expect(onChangeFn).toHaveBeenCalledWith(expectedArgs[index]);
            onChangeFn.mockClear();
        });
    });
});
