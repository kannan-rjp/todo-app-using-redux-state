import React from "react";
import '../App.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo,changeTodo } from '../actions/actionCreators';
import TodoStatus from "./TodoStatus";

const selectTodoById = (state, todoId) => {
    // console.log(todoId,'id')
    // console.log(state,'id')
    return state.filter((list) => list.id === todoId)
}
const ListItem = ({ list }) => {
    console.log(list, 'listid')
    const todo = useSelector((state) => selectTodoById(state, list));
    const dispatch = useDispatch()
    const [{ id, todoName, completed }] = todo;
    // console.log(todo,'lllll')
    //handle the check box for todo is completed or not
    const handleCheckbox = ()=> {
        dispatch(changeTodo(id))
    }
    return (
        <>
            <div className="container">
                <div style={{ display: 'flex', flex: 2 }}>
                    <input type="checkbox" checked={completed} onClick={handleCheckbox}/>
                    {todoName}
                </div>
                <div>
                    <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
                </div>
            </div>
        </>
    )
}
export default ListItem;

