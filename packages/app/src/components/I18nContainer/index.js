import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

const I18nContainer = ({ locale, messages, children }) => (
    <IntlProvider locale={locale} messages={messages} key={locale}>
        {children}
    </IntlProvider>
);

I18nContainer.propTypes = {
    locale: PropTypes.string,
    messages: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]).isRequired,
};

I18nContainer.defaultProps = {
    locale: undefined,
    messages: {},
};

export default I18nContainer;
