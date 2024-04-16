
export interface ListModel {
    items:{id:number,text:string}[];
    deleteTodo():void
}

function TodoList<ListModel>(props: any){

    function deleteTodo(id:string){
     props.deleteTodo(id)
    }
    
    return <div>
        <ul>
            {props.items.map((todo:any) =>(
                <li key={todo.id}>{todo.text}
                <span><button onClick={()=>deleteTodo(todo.id)}>delete</button></span>
                </li>
            ))}
        </ul>
    </div>
}

export default TodoList;