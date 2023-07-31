import { configureStore } from "@reduxjs/toolkit";
import { toDoReducer } from "./ToDos/Slice";
import { usersReducer } from "./Users/usersSlice";
import { authReducer } from "./Auth/AuthSlice";

const store = configureStore({
    reducer:{
        toDo: toDoReducer,
        users: usersReducer,
        auth: authReducer,
    }

})
export default store;
