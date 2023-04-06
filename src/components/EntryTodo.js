import { useSelector,useDispatch } from "react-redux";
import { addTodo } from "../actions/actionCreators";
import { useState } from "react";


const EntryTodo = ()=> {
    const dispatch = useDispatch();    
    const [todoactivity,setTodoactivity] = useState('');
    function handleSubmit(e){
        e.preventDefault()  
        // console.log(todoactivity)
        const data = {
            id:crypto.randomUUID(),
            todoName:todoactivity,
            completed:false
        }
        dispatch(addTodo(data));
        setTodoactivity('')
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your todo here" value={todoactivity} onChange={(e)=>setTodoactivity(e.target.value)} required/>
                <button>ADD</button>
            </form>
        </>
    );
}
export default EntryTodo;