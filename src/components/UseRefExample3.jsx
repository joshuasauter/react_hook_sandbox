import { useState } from "react"
import Todo from "./Todo"

/* 
Solving the following problem:

- make fetch request
- component unmounts before response is received
- get memory leak error
*/

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true)

  return (
    <div>
      {showTodo && <Todo />}
      <button 
        className="btn btn-primary"
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
    </div>
  )
}

export default UseRefExample3
