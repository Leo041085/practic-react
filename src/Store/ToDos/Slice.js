import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    toDo: [],
    
}

const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    //initialState: {x: initialState.toDo}
    reducers:{
        // createToDo: ()=>{}
        // createToDo: function(){}

        // createToDo(state, {payload}){
        //     state.toDo.push(payload)
        // }, 
        createToDo:{
            reducer(state, {payload}){
                state.toDo.push(payload)
            },
            prepare:(nameToDo)=>{
                return{
                    payload:{
                        name: nameToDo,
                        completed: false,
                        id: nanoid()
                    }
                }
            },
        },
        
         
        deleteToDo(state, {payload}){
            state.toDo = state.toDo.filter(toDo => toDo.id !== payload)
        },
                                //3
        changeCompleted(state, {payload}){
            state.toDo = state.toDo.map(toDo => {
                return toDo.id === payload ? {...toDo, completed: !toDo.completed} : toDo
                // if(toDo.id === payload){
                //     return {...toDo, completed: !toDo.completed}
                // }else{
                //     return toDo
                // }
            })
        }
    }    
})
export const {createToDo, deleteToDo, changeCompleted}= toDoSlice.actions;
export const toDoReducer = toDoSlice.reducer;


