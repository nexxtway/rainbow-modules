import { useCallback } from 'react';
import {
    showAppSpinner,
    hideAppSpinner,
    showAppNotification,
    showAppMessage,
    hideAppMessage,
} from '@rainbow-modules/app';

const defaults = {
    success: {
        title: 'Success!',
        description: 'The mutation was executed successfully.',
        icon: 'success',
        timeout: 3000,
        message: 'The mutation was executed successfully.',
        variant: 'success',
    },
    error: {
        title: 'Error!',
        description: 'There was an error, Please try again.',
        icon: 'error',
        timeout: 3000,
        message: 'There was an error, Please try again.',
        variant: 'error',
    },
    asyncFn: async () => {},
    fn: () => {},
};

const resolveMessage = (message, results, mode) => {
    if (typeof message === 'string') {
        return {
            ...defaults[mode],
            description: message,
            message,
        };
    }
    if (typeof message === 'function') {
        const notification = message(results);
        if (typeof notification === 'string') {
            return {
                ...defaults[mode],
                description: notification,
                message: notification,
            };
        }
        if (typeof notification === 'object') {
            return {
                ...defaults[mode],
                ...notification,
            };
        }
    }
    return defaults.error;
};

const typeActionMap = {
    notification: showAppNotification,
    message: showAppMessage,
};

const resolveFeedbackActionFn = (type) => {
    let successAction;
    let errorAction;
    if (typeof type === 'string') {
        const actionFn = typeActionMap[type] || showAppNotification;
        successAction = actionFn;
        errorAction = actionFn;
    } else if (typeof type === 'object') {
        successAction = typeActionMap[type.success] || showAppNotification;
        errorAction = typeActionMap[type.error] || showAppNotification;
    } else {
        successAction = showAppNotification;
        errorAction = showAppNotification;
    }
    return {
        successAction,
        errorAction,
    };
};

const useMutationFlow = (opts) => {
    const {
        mutation = defaults.asyncFn,
        submitSpinnerMessage,
        successMessage = defaults.success.description,
        errorMessage = defaults.error.description,
        onSuccess = defaults.fn,
        onError = defaults.fn,
        type = 'notification',
    } = opts;
    const { successAction, errorAction } = resolveFeedbackActionFn(type);

    const mutate = useCallback(
        async (...args) => {
            hideAppMessage();
            showAppSpinner({ message: submitSpinnerMessage });
            try {
                const showAction = successMessage !== null;
                const res = await mutation(...args);
                hideAppSpinner();
                onSuccess(res);
                if (showAction) {
                    successAction(resolveMessage(successMessage, res, 'success'));
                }
            } catch (error) {
                const showAction = errorMessage !== null;
                hideAppSpinner();
                onError(error);
                if (showAction) {
                    errorAction(resolveMessage(errorMessage, error, 'error'));
                }
            }
        },
        [
            errorAction,
            errorMessage,
            mutation,
            onError,
            onSuccess,
            submitSpinnerMessage,
            successAction,
            successMessage,
        ],
    );

    return { mutate };
};

export default useMutationFlow;
