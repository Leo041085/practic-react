import { configureStore } from "@reduxjs/toolkit";
import { toDoReducer } from "./ToDos/Slice";
import { usersReducer } from "./Users/usersSlice";

const store = configureStore({
    reducer:{
        toDo: toDoReducer,
        users: usersReducer
    }

})
export default store;
