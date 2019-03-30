export function companiesReducer(state = [], action){
    switch(action.type){
        case 'ADD_COMPANIES':
            return action.companies
        case 'DELETE_COMPANY':
            debugger
            let company = action.company
            let updatedCompanies =  state.filter( c => {
                return c.id !== company.id
            })
            return updatedCompanies
        default: 
            return state
    }
} 