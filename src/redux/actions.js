const ADD_COMPANIES = 'ADD_COMPANIES'
const ADD_EDIT_COMPANY = 'ADD_EDIT_COMPANY'
const CLEAR_EDIT_FORM = 'CLEAR_EDIT_FORM'

export function addCompanies(companies){
   return { type: ADD_COMPANIES, companies: companies }
}

export function addEditCompany(company){
   return { type: ADD_EDIT_COMPANY, company: company}
}

export function clearEditForm(){
   return { type: CLEAR_EDIT_FORM }
}