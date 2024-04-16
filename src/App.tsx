import { useState } from "react";
import AddTodo from "./components/AddTodo";
import { TodoModel } from "./type/TodoModel";
import TodoList from "./components/TodoList";



function App() {
  const [todos,setTodo] =  useState<TodoModel[]>([{id:'1',text:'rahul'}])

  function addTodoList(text:string){
    setTodo([...todos ,{id:Math.random().toString(),text:text}])
    console.log(todos)
  }

  function deleteTodo(id:string){
    setTodo(preTodo =>{
      return preTodo.filter(el=> el.id !== id)
    })
  }

  return (
    <div className="App">
      <AddTodo addNewValue={addTodoList}   ></AddTodo>
      <TodoList items={todos} deleteTodo={deleteTodo} ></TodoList>
    </div>
  );
}

export default App;
