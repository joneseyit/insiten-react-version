export function companiesReducer(state = [], action){
    switch(action.type){
        case 'ADD_COMPANIES':
            return action.companies

        case 'DELETE_COMPANY':
            let company = action.company
            let updatedCompanies =  state.filter( c => {
                return c.id !== company.id
            })
            return updatedCompanies

        case 'ADD_COMPANY':
            let newCompany = action.company
            let newState = state.concat(newCompany)
            return newState

        default: 
            return state
    }
} 