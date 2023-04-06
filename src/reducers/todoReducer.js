
const todoReducer = (state = [], action) => {
    switch (action.type) {

        case 'ADD_TODO':
            // console.log('yeah I am action payloa,,',action.payload)
            // console.log([...state,action.payload],'Restruct')
            return [...state, action.payload];
        case 'DELETE_TODO':
            return state.filter((list) => list.id != action.id)
        case 'CHANGE_TODO':
            //here we are using two ways on is filter().map()
            //another is  i am trying
            return state.map((list)=>{
                if(list.id != action.id){
                    return list;
                }
                return {
                    ...list,
                    completed: !list.completed
                }
            })
        default:
            return state
    }
}
export default todoReducer;