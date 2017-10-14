import { createStore, combineReducers, applyMiddleware } from 'redux'
import { combineEpics, createEpicMiddleware } from "redux-observable"
// import logger from "redux-logger"

import rootReducer from "./reducers"

import epics from "./epics"

// import { initializeApp } from 'firebase'

// var config = {
//   apiKey: "AIzaSyCv26Sd8K41xXVDSVyPr5SlIEw-rfOnKWc",
//   authDomain: "tourist-guid.firebaseapp.com",
//   databaseURL: "https://tourist-guid.firebaseio.com",
//   projectId: "tourist-guid",
//   storageBucket: "tourist-guid.appspot.com",
//   messagingSenderId: "621920353338"
// };
// initializeApp(config);



const rootEpic = combineEpics(
    epics.add,
    epics.delete
)

const epicMiddleware =  createEpicMiddleware(rootEpic)

const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
)



export default store