import { useSelector,useDispatch } from "react-redux";
import ListItem from './ListItem';
import TodoStatus from "./TodoStatus";

const ListTodo = ()=> {
    const dispatch = useDispatch();
    const remainingTodo = useSelector((state)=>{
        const remainTodoCount = state.filter((list)=>list.completed === false)
        return remainTodoCount.length;
    })
    const ListTodo = useSelector((state)=>state)
    console.log(ListTodo,'Lists')
    return(
        <>
            <div style={{display:'flex',justifyContent:'center'}}>
                {ListTodo && 
                        <div>{ListTodo.map((list,key)=> {
                            return <ListItem key={list.id} list={list.id}/>
                        }
                        )}</div>
                        
                }
            </div>
            <TodoStatus remaincount={remainingTodo} />
        </>

    );
}
export default ListTodo