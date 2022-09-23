import * as router from 'react-router-dom';
import { isRouterV6 } from '../helpers/getReactRouterVersion';

const useNavigateFn = () => {
    let key = Object.prototype.hasOwnProperty.call(router, 'useHistory') ? 'useHistory' : undefined;
    const useHistory = key ? router[key] : () => {};

    key = Object.prototype.hasOwnProperty.call(router, 'useNavigate') ? 'useNavigate' : undefined;
    const useNavigate = key ? router[key] : () => {};

    const history = useHistory();
    const navigate = useNavigate();
    const navigateFn = (path) => {
        history.push(path);
    };
    return isRouterV6 ? navigate : navigateFn;
};

export default useNavigateFn;
