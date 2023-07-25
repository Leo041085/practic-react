import React from 'react';
import { useSelector } from 'react-redux';

export const ToDoPage = () => {
  const { toDo } = useSelector(state => state.toDo);
  console.log(toDo);
  return (
    <ul>
      {toDo.map(toDo => {
        return <li>{toDo.name}</li>;
      })}
    </ul>
  );
};
