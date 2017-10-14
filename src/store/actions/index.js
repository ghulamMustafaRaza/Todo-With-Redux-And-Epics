export default class actions {
    static ADD = "ADD"
    static ADD_REDUCER = "ADD_REDUCER"

    static DELETE = "DELETE"
    static DELETE_REDUCER = "DELETE_REDUCER"

    static add = (payload) => {
        console.log(0)
        return ({
            type: actions.ADD,
            payload
        })
    }

    static addReducer = (payload) => ({
        type: actions.ADD_REDUCER,
        payload
    })

    static delete = (payload) => ({
        type: actions.DELETE,
        payload
    })

    static deleteReducer = (payload) => ({
        type: actions.DELETE_REDUCER,
        payload
    })
}