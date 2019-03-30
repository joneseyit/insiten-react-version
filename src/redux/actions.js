const ADD_COMPANIES = 'ADD_COMPANIES'
const DELETE_COMPANY = 'DELETE_COMPANY'

export function addCompanies(companies){
   return { type: ADD_COMPANIES, companies: companies }
}

export function deleteCompany(company){
   return { type: DELETE_COMPANY, company: company }
}