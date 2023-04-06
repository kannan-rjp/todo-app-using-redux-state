
import './App.css';
import EntryTodo from './components/EntryTodo';
import ListTodo from './components/ListTodo';
import TodoStatus from './components/TodoStatus';


function App() {
  return (
    <div className="App">
     <h1>Todo App using Redux</h1> 
     <EntryTodo />
     <ListTodo />

    
    </div>
  );
}

export default App;
