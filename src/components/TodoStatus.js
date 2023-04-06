const TodoStatus = ({remaincount})=> {
    const suffix = remaincount <= 1 ? '':'s';
    return(
        <>
        <h3>Remaining Todos</h3>
        <h4>{remaincount} item{suffix} left</h4>
        </>
    );
}
export default TodoStatus;