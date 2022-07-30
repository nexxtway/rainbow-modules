import * as router from 'react-router-dom';

const getReactRouterVersion = () =>
    Object.prototype.hasOwnProperty.call(router, 'Switch') ? '5' : '6';

const isRouterV6 = getReactRouterVersion() === '6';
const isRouterV5 = getReactRouterVersion() === '5';

export default getReactRouterVersion;
export { isRouterV6, isRouterV5 };
