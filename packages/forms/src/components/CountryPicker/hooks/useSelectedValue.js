import { useMemo } from 'react';

const useSelectedValue = (value, countries) => {
    return useMemo(() => {
        if (value && value.isoCode) {
            const country = countries.find(({ isoCode }) => isoCode === value.isoCode);
            if (country) {
                const { flagIcon, country: label, isoCode } = country;
                return {
                    icon: flagIcon,
                    label,
                    name: isoCode,
                };
            }
        }
        return null;
    }, [value, countries]);
};

export default useSelectedValue;
