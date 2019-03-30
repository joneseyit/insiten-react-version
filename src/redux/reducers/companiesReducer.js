export function companiesReducer(state = [], action){
    switch(action.type){
        case 'ADD_COMPANIES':
            return action.companies
        default: 
            return state
    }
} 