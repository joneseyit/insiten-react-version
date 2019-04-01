const ADD_COMPANIES = 'ADD_COMPANIES'
const DELETE_COMPANY = 'DELETE_COMPANY'
const ADD_COMPANY = 'ADD_COMPANY'
const ADD_SEARCH_RESULTS = 'ADD_SEARCH_RESULTS'

export function addCompanies(companies){
   return { type: ADD_COMPANIES, companies: companies }
}

export function deleteCompany(company){
   return { type: DELETE_COMPANY, company: company }
}

export function addCompany(company){
   return { type: ADD_COMPANY, company: company}
}

export function addSearchResults(companies){
   return { type: ADD_SEARCH_RESULTS, companies: companies}
}

