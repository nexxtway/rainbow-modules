import { DatePicker, DateTimePicker, Input, TimePicker } from 'react-rainbow-components';

export default function getComponent(type) {
    if (type === 'date') return DatePicker;
    if (type === 'time') return TimePicker;
    if (type === 'dateTime') return DateTimePicker;
    return Input;
}
