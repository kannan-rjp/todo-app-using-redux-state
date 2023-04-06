import { ADD_TODO,DELETE_TODO,CHANGE_TODO } from "./actionType"
export const addTodo = (data)=> {
    return{
        type: ADD_TODO,
        payload: data
    }
}
export const deleteTodo = (id)=> {
    // console.log(id,'Comes from div')
    return{
        type: DELETE_TODO,
        id
    }
}
export const changeTodo = (id)=> {
    // console.log('Yeah id is comes to the check',id)
    return{
        type: CHANGE_TODO,
        id
    }
}