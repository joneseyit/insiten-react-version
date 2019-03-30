export function editCompanyReducer(state = null, action){
    switch(action.type){
        case 'ADD_EDIT_COMPANY':
            return action.company
        case 'CLEAR_EDIT_FORM':
            return null
        default: 
            return state
    }
}
