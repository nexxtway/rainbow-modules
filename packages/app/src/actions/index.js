let AppActions = {};

export const showAppSpinner = () => {
    AppActions.setLoading(true);
};

export const hideAppSpinner = () => {
    AppActions.setLoading(false);
};

export const showAppMessage = (params) => {
    AppActions.setIsMessageVisible(true);
    AppActions.setMessageParams(params);
};

export const updateAppActions = (actions) => {
    AppActions = {
        ...AppActions,
        ...actions,
    };
};
