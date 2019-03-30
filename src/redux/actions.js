const ADD_COMPANIES = 'ADD_COMPANIES'
const DELETE_COMPANY = 'DELETE_COMPANY'
const ADD_COMPANY = 'ADD_COMPANY'

export function addCompanies(companies){
   return { type: ADD_COMPANIES, companies: companies }
}

export function deleteCompany(company){
   return { type: DELETE_COMPANY, company: company }
}

export function addCompany(company){
   return { type: ADD_COMPANY, company: company}
}