import countriesData from '../assets/data/countries.json';

export const FETCH_COUNTRY = 'FETCH_COUNTRY';
export const INVALID_SEARCH = 'INVALID_SEARCH';
export const RESET_SEARCH = 'INVALID_SEARCH';

const countryObject = Object.assign(...countriesData.map(d => ({ [d.country.toLowerCase()]: d })));

function fetchCountry(country) {
  return {
    type: FETCH_COUNTRY,
    payload: country,
  };
}

function invalidSearch() {
  return {
    type: INVALID_SEARCH,
    invalid: true,
  };
}
export function resetSearch() {
  return {
    type: RESET_SEARCH,
    invalid: false,
  };
}

export function getCountry(country) {
  return (dispatch) => {
    if (countryObject[country.toLowerCase()] !== undefined && countryObject[country.toLowerCase()].country.toLowerCase() === country.toLowerCase()) {
      dispatch(fetchCountry(countryObject[country]));
    } else {
      dispatch(invalidSearch());
    }
  };
}
