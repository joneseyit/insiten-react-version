const ADD_COMPANIES = 'ADD_COMPANIES'
const ADD_EDIT_COMPANY = 'ADD_EDIT_COMPANY'
const CLEAR_EDIT_FORM = 'CLEAR_EDIT_FORM'
const TOGGLE_EDIT = 'TOGGLE_EDIT'

export function addCompanies(companies){
   return { type: ADD_COMPANIES, companies: companies }
}