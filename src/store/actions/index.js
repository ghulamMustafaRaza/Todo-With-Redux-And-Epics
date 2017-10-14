export default class actions {
    static ADD = "ADD"
    static ADD_REDUCER = "ADD_REDUCER"
    static ADD_ITEM = "ADD_ITEM"

    static DELETE = "DELETE"
    static DELETE_REDUCER = "DELETE_REDUCER"

    static DELETE_ITEM = "DELETE_ITEM"

    static add = (payload) => ({
        type: actions.ADD,
        payload
    })

    static addItem = (payload) => ({
        type: actions.ADD_ITEM,
        payload
    })

    static addReducer = (payload) => ({
        type: actions.ADD_REDUCER,
        payload
    })
    
    static delete = (payload) => ({
        type: actions.DELETE,
        payload
    })

    static deleteItem = (payload) => ({
        type: actions.DELETE_ITEM,
        payload
    })

    static deleteReducer = (payload) => ({
        type: actions.DELETE_REDUCER,
        payload
    })
}