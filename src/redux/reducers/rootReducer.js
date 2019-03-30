import { combineReducers } from 'redux'
import { companiesReducer } from './companiesReducer'
import { editCompanyReducer } from './editCompanyReducer'

export default combineReducers({
    companies: companiesReducer,
    editCompany: editCompanyReducer
})