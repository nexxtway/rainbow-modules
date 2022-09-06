import * as router from 'react-router-dom';

/**
 * Get the react-router-dom installed version.
 *
 * @returns The react-router-dom version being used as a string ('5' | '6')
 */
const getReactRouterVersion = () =>
    Object.prototype.hasOwnProperty.call(router, 'Switch') ? '5' : '6';

const isRouterV6 = getReactRouterVersion() === '6';
const isRouterV5 = getReactRouterVersion() === '5';

export default getReactRouterVersion;
export { isRouterV6, isRouterV5 };
