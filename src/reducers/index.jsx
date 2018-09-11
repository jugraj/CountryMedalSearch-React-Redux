import { combineReducers } from 'redux';
import CountriesData from './CountriesDataReducer';
import SelectedCountries from './SelectedCountriesReducer';
import InvalidSearch from './InvalidSearchReducer';


const rootReducer = combineReducers({
  countriesAll: CountriesData,
  chosenCountries: SelectedCountries,
  invalidSearch: InvalidSearch,
});

export default rootReducer;
