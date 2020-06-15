import isEmpty from './isEmpty';

// eslint-disable-next-line no-useless-escape
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function isEmail(value) {
    if (isEmpty(value)) return false;
    return emailRegEx.test(value);
}
