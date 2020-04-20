let AppActions = {};

export const showAppSpinner = () => {
    AppActions.setLoading(true);
};

export const hideAppSpinner = () => {
    AppActions.setLoading(false);
};

export const updateAppActions = (actions) => {
    AppActions = {
        ...AppActions,
        ...actions,
    };
};
