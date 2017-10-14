import actions from '../actions'

let  initialState = {
    todo: ['sadsadas', 'asdsasasa']
}

export default (state = initialState, action) => {
    switch (action.type){
        case actions.ADD_REDUCER: 
            return {...state, todo: state.todo.concat(action.payload)}
        case actions.DELETE_REDUCER:
            let todo = [...state.todo].filter((a, i) => i !== action.payload) 
            console.log(todo)
            return {...state, todo}
        default:
            return state
    }
}