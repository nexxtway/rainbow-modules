import { useHistory as useHistoryRouter, useNavigate as useNavigateRouter } from 'react-router-dom';

const useNavigateFn = () => {
    const isV6 = !!useNavigateRouter;
    const useHistory = useHistoryRouter || (() => {});
    const useNavigate = useNavigateRouter || (() => {});

    const history = useHistory();
    const navigate = useNavigate();
    const navigateFn = (path) => {
        history.push(path);
    };
    return isV6 ? navigate : navigateFn;
};

export default useNavigateFn;
