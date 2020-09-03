let AppActions = {};

export const showAppSpinner = () => {
    AppActions.setLoading(true);
};

export const hideAppSpinner = () => {
    AppActions.setLoading(false);
};

export const showAppMessage = (params) => {
    AppActions.setMessageParams(params);
    AppActions.setIsMessageVisible(true);
};

export const showAppNotification = (notification, timeout) => {
    AppActions.addNotification(notification, timeout);
};

export const updateAppActions = (actions) => {
    AppActions = {
        ...AppActions,
        ...actions,
    };
};

export const confirmModal = async (params) => {
    return new Promise((resolve) => {
        AppActions.setConfirmModalParams({
            ...params,
            onConfirm: () => {
                AppActions.setIsConfirmModalVisible(false);
                return resolve(true);
            },
            onCancel: () => {
                AppActions.setIsConfirmModalVisible(false);
                return resolve(false);
            },
        });
        AppActions.setIsConfirmModalVisible(true);
    });
};
