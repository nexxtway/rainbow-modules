import { showAppSpinner, hideAppSpinner, showAppNotification } from '@rainbow-modules/app';

const defaults = {
    success: {
        title: 'Success!',
        description: 'The mutation was executed successfully.',
        icon: 'success',
        timeout: 3000,
    },
    error: {
        title: 'Error!',
        description: 'There was an error, Please try again.',
        icon: 'error',
        timeout: 3000,
    },
};

const resolveMessage = (message, results, mode) => {
    if (typeof message === 'string') {
        return {
            ...defaults[mode],
            description: message,
        };
    }
    if (typeof message === 'function') {
        const notification = message(results);
        if (typeof notification === 'string') {
            return {
                ...defaults[mode],
                description: notification,
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

const useMutationFlow = (opts) => {
    const {
        mutation = async () => {},
        successMessage = defaults.success.description,
        errorMessage = defaults.error.description,
        onSucess = () => {},
        onError = () => {},
    } = opts;
    const mutate = async (...args) => {
        showAppSpinner();
        try {
            const res = await mutation(...args);
            onSucess(res);
            hideAppSpinner();
            showAppNotification(resolveMessage(successMessage, res, 'success'));
        } catch (error) {
            onError(error);
            hideAppSpinner();
            showAppNotification(resolveMessage(errorMessage, error, 'error'));
        }
    };
    return { mutate };
};

export default useMutationFlow;
