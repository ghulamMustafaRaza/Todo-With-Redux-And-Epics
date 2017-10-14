// import * as firebase from 'firebase'
import { Observable } from "rxjs"

import store from "../"

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import actions from "../actions"

export default class epics {
    constructor(){}
    static add = (actions$) => (
        actions$.ofType(actions.ADD)
            .switchMap(({payload}) => {
                console.log(1)
                store.dispatch({
                    type: actions.ADD_REDUCER,
                    payload
                })
                return Observable.of()
            })
    )

    static delete = (actions$) => (
        actions$.ofType(actions.DELETE)
            .switchMap(({payload}) => {
                console.log(1)
                store.dispatch({
                    type: actions.DELETE_REDUCER,
                    payload
                })
                return Observable.of()
            })
    )
    // static logIn = (actions$) => (
    //     actions$.ofType(authActions.LOG_IN)
    //         .switchMap(({payload}) => {
    //             return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    //             .then(() => {
    //                 var currentUser = firebase.auth().currentUser;
    //                 return authActions.logInFullFil(currentUser)
    //             }).catch(err => {
    //                 alert(err.message)                    
    //                 return ({
    //                     type: "LOG_IN_FAIL",
    //                     payload: {err}
    //                 })
    //             })
    //         }).subscribe((ob)=>{
    //             console.log(ob)
    //             store.dispatch(ob)
    //             Observable.of()
    //         })
    // )
}