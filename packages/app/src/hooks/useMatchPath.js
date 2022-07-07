import { useHistory, matchPath } from 'react-router-dom';

/**
 * This hook allows to use the `matchPath` function from `react-router-dom` regardless
 * of the current version (v5, v6).
 * NOTE: It is possible that not all features of `matchPath` are available.
 */
const useMatchPath = () => {
    const isV5 = !!useHistory;

    return (route, pathname) => {
        if (isV5) {
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
