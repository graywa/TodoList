import './App.css'
import React, {useEffect} from 'react'
import TodoList from "./Todo/TodoList"
import Context from "./Context"
import Loader from "./Loader"
import Modal from "./Modal/Modal"
const AddTodo = React.lazy(() => import("./AddTodo"))


function App() {

  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(todos => setTimeout(() => {
              setTodos(todos)
              setLoading(false)
            },2000 ))
  },[])

  window.store = todos

  let toggleChange = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function onCreate(title) {
    setTodos(todos.concat([{
      id: Date.now(),
      completed: false,
      title,
    }]))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
      <Context.Provider value={{removeTodo}}>
        <div className='wrapper'>
          <h1>Todo List</h1>
          <Modal />
          <React.Suspense fallback={<div>...loading</div>}>
            <AddTodo onCreate={onCreate} />
          </React.Suspense>
          {loading && <Loader />}
          { (todos.length)
              ? <TodoList todos={todos} toggleChange={toggleChange}/>
              : (loading ? null : <p>No todos</p>) }
        </div>
      </Context.Provider>
  )
}

export default App
