import { matchPath } from 'react-router-dom';
import { isRouterV5 } from '../helpers/getReactRouterVersion';

/**
 * This hook allows to use the `matchPath` function from `react-router-dom` regardless
 * of the current version (v5, v6).
 * NOTE: It is possible that not all features of `matchPath` are available.
 */
const useMatchPath = () => {
    return (route, pathname) => {
        if (isRouterV5) {
            return matchPath(pathname, {
                ...route,
                strict: route.caseSensitive,
                exact: route.end,
            });
        }
        return matchPath(route, pathname);
    };
};

export default useMatchPath;
