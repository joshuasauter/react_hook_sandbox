import { render } from '@testing-library/react'
import { useState, useEffect, useRef } from 'react' 

/*
Input text tracking number of changes to the text that is 
being input while also tracking the previous state of the
input each time more text is added/deleted
*/

function UseRefExample2() {
  const [name, setName] = useState('')

  const renders = useRef(1)
  const prevName = useRef('')

  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3" 
      />
    </div>
  )
}

export default UseRefExample2