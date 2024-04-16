import React, { useRef } from "react";
import { TodoType } from "../type/type";

function AddTodo(props:TodoType){
    const textvalue = useRef<HTMLInputElement>(null);
  
   function addNewTodo(event:React.FormEvent){
    event.preventDefault();
    const textCurrentValue = textvalue.current!.value 
    props.addNewValue(textCurrentValue)
   }

    return(
        
<div className="container">
    <h2>Add New Todo</h2>
    <form  onSubmit={(e)=>addNewTodo(e)}>
        <div className="form-group">
            <label htmlFor="todo-text">Text:</label>
            <input type="text" id="text" name="text" required  ref={textvalue} />
        </div>
        <div className="form-group">
            <button type="submit">Submit</button>
        </div>
    </form>
</div>
    )
}

export default AddTodo;