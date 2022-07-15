import { useHistory as useHistoryRouter, useNavigate as useNavigateRouter } from 'react-router-dom';
import { isRouterV6 } from '../helpers/getReactRouterVersion';

const useNavigateFn = () => {
    const useHistory = useHistoryRouter || (() => {});
    const useNavigate = useNavigateRouter || (() => {});

    const history = useHistory();
    const navigate = useNavigate();
    const navigateFn = (path) => {
        history.push(path);
    };
    return isRouterV6 ? navigate : navigateFn;
};

export default useNavigateFn;
