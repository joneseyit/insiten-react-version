export function searchResultsReducer (state = null, action){
    switch(action.type){
        case 'ADD_SEARCH_RESULTS': 
            return action.companies
        default: 
            return state
    }
}