
import rootReducer from "./reducer"
const configureStore = require('@reduxjs/toolkit').configureStore

const store = configureStore({
    reducer : {rootReducer},
})

export default store;