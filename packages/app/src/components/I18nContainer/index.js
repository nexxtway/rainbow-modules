import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

const I18nContainer = ({ locale, messages, children }) => (
    <IntlProvider locale={locale} messages={messages} key={locale}>
        {children}
    </IntlProvider>
);

I18nContainer.propTypes = {
    locale: PropTypes.string.isRequired,
    messages: PropTypes.object,
    children: PropTypes.object.isRequired,
};

I18nContainer.defaultProps = {
    messages: {},
};

export default I18nContainer;
