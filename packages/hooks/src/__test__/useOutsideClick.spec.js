import { renderHook } from '@testing-library/react-hooks';
import useOutsideClick from '../useOutsideClick';

const createDocumentListenersMock = () => {
    const listeners = {};
    const handler = (domEl, event) => listeners[event] && listeners[event]({ target: domEl });
    document.addEventListener = jest.fn((event, cb) => {
        listeners[event] = cb;
    });
    document.removeEventListener = jest.fn((event) => {
        delete listeners[event];
    });
    return handler;
};

describe('useOutsideClick', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
    });

    it('should increment counter when click outside', async () => {
        const fireEvent = createDocumentListenersMock();
        let counter = 0;
        const { unmount } = renderHook(() =>
            useOutsideClick(container, () => {
                counter += 1;
            }),
        );

        fireEvent(container, 'mousedown');
        expect(counter).toEqual(0);
        fireEvent(document.body, 'mousedown');
        expect(counter).toEqual(1);

        fireEvent(container, 'touchstart');
        expect(counter).toEqual(1);
        fireEvent(document.body, 'touchstart');
        expect(counter).toEqual(2);

        unmount();
        fireEvent(document.body, 'mousedown');
        fireEvent(document.body, 'touchstart');
        expect(counter).toEqual(2);
    });

    it('should do not increment counter when click outside', async () => {
        const fireEvent = createDocumentListenersMock();
        let counter = 0;
        renderHook(() =>
            useOutsideClick(
                container,
                () => {
                    counter += 1;
                },
                false,
            ),
        );

        fireEvent(container, 'mousedown');
        fireEvent(document.body, 'mousedown');
        fireEvent(container, 'touchstart');
        fireEvent(document.body, 'touchstart');
        expect(counter).toEqual(0);
    });
});
