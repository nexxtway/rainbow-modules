import { DatePicker, DateTimePicker, Input, TimePicker } from 'react-rainbow-components';
import getComponent from '../getComponent';

describe('getComponent', () => {
    it('should return the correct component', () => {
        const typesMap = {
            dateTime: DateTimePicker,
            date: DatePicker,
            time: TimePicker,
            text: Input,
            currency: Input,
            number: Input,
            percent: Input,
            url: Input,
        };
        Object.keys(typesMap).forEach((type) => {
            expect(getComponent(type)).toBe(typesMap[type]);
        });
    });
});
