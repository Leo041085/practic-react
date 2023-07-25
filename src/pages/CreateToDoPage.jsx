import { createToDo } from 'Store/ToDos/Slice';
//import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch } from 'react-redux';



export const CreateToDoPage = () => {
    const dispatch = useDispatch();

    const handlerOnSubmit = (evt)=>{
        evt.preventDefault();
        const toDoValue = evt.target[0].value
        //elements.toDo.value
        // dispatch(createToDo({name: toDoValue, id: nanoid(), completed: false}));
        dispatch(createToDo(toDoValue));

    }

  return (
    <>
      <form onSubmit = {handlerOnSubmit}>
        <input type="text" name = "toDo"/>
        <button type="submit">Button</button>
      </form>
    </>
  );
};
