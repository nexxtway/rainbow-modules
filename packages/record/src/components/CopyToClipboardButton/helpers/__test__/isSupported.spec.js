import isSupported from '../isSupported';

describe('<isSupported/>', () => {
    it('should return true when window.clipboardData and window.clipboardData.setData is defined', () => {
        window.clipboardData = {
            setData: jest.fn(),
        };
        expect(isSupported()).toBeTruthy();
    });
    it('should return true when document.queryCommandSupported is defined and document.queryCommandSupported("copy") return true', () => {
        document.queryCommandSupported = jest.fn(() => true);
        expect(isSupported()).toBeTruthy();
    });
    it('should return false', () => {
        window.clipboardData = {
            setData: false,
        };
        document.queryCommandSupported = jest.fn(() => false);
        expect(isSupported()).toBeFalsy();
    });
});
