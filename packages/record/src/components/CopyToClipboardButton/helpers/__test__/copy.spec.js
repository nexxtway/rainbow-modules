import copy from '../copy';

describe('<copy/>', () => {
    it('should call document.execCommand with string value', () => {
        document.execCommand = jest.fn();
        expect(copy('test')).toBeTruthy();
        expect(document.execCommand).toHaveBeenCalledWith('copy');
    });
    it('should not call document.execCommand with string value', () => {
        document.execCommand = jest.fn();
        expect(copy()).toBeFalsy();
        expect(document.execCommand).toBeCalledTimes(0);
    });
    it('should call window.clipboardData.setData with string value', () => {
        document.execCommand = jest.fn(() => {
            throw new Error('vergaaaa');
        });
        window.clipboardData = {
            setData: jest.fn(),
        };
        expect(copy('test')).toBeTruthy();
        expect(window.clipboardData.setData).toHaveBeenCalledWith('text', 'test');
    });
    it('should return false when document.execCommand and window.clipboardData.setData return throw error', () => {
        document.execCommand = jest.fn(() => {
            throw new Error();
        });
        window.clipboardData = {
            setData: jest.fn(() => {
                throw new Error();
            }),
        };
        expect(copy('test')).toBeFalsy();
    });
});
