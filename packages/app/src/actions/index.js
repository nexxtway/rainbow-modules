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

export const confirmModal = async (params) => {
    return new Promise((resolve) => {
        AppActions.setIsConfirmModalVisible(true);
        AppActions.setConfirmModalParams({
            ...params,
            onConfirm: () => {
                resolve(true);
                AppActions.setIsConfirmModalVisible(false);
            },
            onCancel: () => {
                resolve(false);
                AppActions.setIsConfirmModalVisible(false);
            },
        });
    });
};
