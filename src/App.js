import react, { useState, useRef, useEffect} from 'react';
import TodoList from './TodoList'


const LOCAL_STORAGE_KEY = 'todoApp.todos'


function App() {
  const [todos, setTodos] = useState([])
  const TodoNameRef = useRef()

  useEffect(() => { 
    const storedTodos = JSON.parse(localStorage.getItem
      (LOCAL_STORAGE_KEY))
      if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {

  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
  const name = TodoNameRef.current.value
  if (name === '')return 
  setTodos(prevTodos => {
    return [...prevTodos, { id:1, name:name, complete:false
    }]
  })
  console.log(name)
  TodoNameRef.current.value = null

  }
  return (
    <>
    <TodoList  todos={todos}/>
    <input ref={TodoNameRef} type='text'/>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button> Clear Completed Todos</button>
    <div>0 left to do</div>
    </>

  )
  
}
export default App;