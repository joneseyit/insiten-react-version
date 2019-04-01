import { combineReducers } from 'redux'
import { companiesReducer } from './companiesReducer'
import { searchResultsReducer } from "./searchResultsReducer";

export default combineReducers({
    companies: companiesReducer,
    searchResults: searchResultsReducer
})