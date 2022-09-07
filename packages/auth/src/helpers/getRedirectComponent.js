import * as router from 'react-router-dom';

export default function getRedirectComponent() {
    const key = Object.prototype.hasOwnProperty.call(router, 'Redirect') ? 'Redirect' : null;
    return key ? router[key] : null;
}
