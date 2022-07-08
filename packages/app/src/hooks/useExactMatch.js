import { useMatch as useMatchRouter, useRouteMatch as useRouteMatchRouter } from 'react-router-dom';
import { isRouterV6 } from '../helpers/getReactRouterVersion';

/**
 * This hooks determines if the path is an exact match to the current location.
 *
 * @param {string} path
 */
const useExactMatch = (path) => {
    const useMatch = useMatchRouter || useRouteMatchRouter;

    const match = useMatch(path);

    if (!match) return false;

    return isRouterV6 ? !!match.pattern.end : match.isExact;
};

export default useExactMatch;
