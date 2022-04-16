import './App.css';
import React, {useState} from 'react';
import Todo from './Todo';

function App() {

  const [todos, setTodo] = useState([])
  const [value, setValue] = useState('')
  const [id, setId] = useState(null)
  
  const setStatus = id => {
    setTodo(
      todos.map(todo => (
        todo.id === id ?
        {...todo, complete: !todo.complete} :
        {...todo}
      ))
    )
  }

  const setText = id => {
    const todo = todos.find(todo => todo.id === id)

    document.getElementById('input__todo').focus()

    setValue(todo.title)
    setId(id)
  }

  const addTodo = id => {
    if (value.trim()) {
      if (id) {
        setTodo(
          todos.map(todo => (
            todo.id === id ? 
            {...todo, title: value} :
            {...todo}
          ))
        )
      } else {
        setTodo([...todos, {
          id: Date.now(),
          title: value,
          time: new Date().toLocaleString(),
          complete: false 
        }])
      }
      setId(null)
    } else {
      alert('Поле не должно быть пустым')
    }
    setValue('')
  }


  return (
    <div className="App">
      <div className="container">
        <h1 className="app__title">React App</h1>
        <form className="input__form" onSubmit={event => event.preventDefault()}>
          <div className="input__title">Введите задачу</div>
          <input 
            className="input__todo"
            id='input__todo'
            placeholder="Введите задачу"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <input 
            type='submit'
            className="input__submit"
            value='Добавить'
            onClick={() => addTodo(id)}
          />
        </form>
        <div className="todo__list">
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} setStatus={setStatus} setText={setText}/>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default App;
