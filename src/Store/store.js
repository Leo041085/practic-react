import { configureStore } from "@reduxjs/toolkit";
import { toDoReducer } from "./ToDos/Slice";

const store = configureStore({
    reducer:{
        toDo: toDoReducer
    }

})
export default store;
