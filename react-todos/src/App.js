import React, { useState } from 'react'
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One' },
    { rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'User One' }

  ])

  const addTodo = (description, assigned) => {
    if (todos.length > 0) {
      let rowNumber = 0;
      if (rowNumber > 0) {
        rowNumber = todos[todos.length - 1].rowNumber + 1;
      } else {
        rowNumber = 1;
      }
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo]);
    }
  }

  const deleteTodo = (deleteTodoRowNumber)=>{
    let filtered = todos.filter(function(value){
      return value.rowNumber !== deleteTodoRowNumber
    });
    setTodos(filtered);
  }

  const [showNewTodoForm,setShowNewTodoForm] = useState(false);

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button class='btn btn-primary' onClick={()=>setShowNewTodoForm(!showNewTodoForm)}>
            {showNewTodoForm ? 'Close New Todo':'New Todo'}
            </button>
            {showNewTodoForm && <NewTodoForm addTodo={addTodo} />}
          
        </div>
      </div>
    </div>
  );
}

export default App;
