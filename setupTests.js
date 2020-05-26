/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { toHaveNoViolations } from 'jest-axe';

configure({ adapter: new Adapter() });

expect.extend({
    ...toHaveNoViolations,
});

jest.mock('react-intl', () => {
    const reactIntl = jest.requireActual('react-intl');
    const intl = reactIntl.createIntl({
        locale: 'en',
    });

    return {
        ...reactIntl,
        useIntl: () => intl,
    };
});
