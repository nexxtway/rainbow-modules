import { useMemo } from 'react';
import allCountries from '../countries';
import customWarning from '../helpers/customWarning';

export default function useCountries(countries) {
    return useMemo(() => {
        if (!countries) {
            return allCountries;
        }
        if (countries.length === 0) {
            return allCountries;
        }
        const filteredCountries = allCountries.filter((country) =>
            countries.includes(country.isoCode),
        );
        if (filteredCountries.length === 0) {
            customWarning();
            return allCountries;
        }
        return filteredCountries;
    }, [countries]);
}
