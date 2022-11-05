import { useTheme } from 'react-rainbow-components';

const useDefaultColors = () => {
    const theme = useTheme();
    const { success, warning, error } = theme.rainbow.palette;
    return {
        success: success.main,
        warning: warning.main,
        error: error.main,
    };
};

export default useDefaultColors;
