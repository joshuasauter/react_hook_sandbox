import { useRef } from 'react'

/*
The useRef hook is a function provided by the React library that 
can be used to create mutable "ref" objects. These objects have a 
single property, .current, that is intended to hold a reference to 
something, which could be any value. Here's what makes it special:

1. Mutable object: Unlike state variables, a ref object doesn't 
cause re-rendering when it is updated. The .current property is 
mutable and can be changed freely. This makes it great for storing 
values that you want to persist across renders but do not require a 
re-render when they change.

2. Persistent across renders: The ref object returned by useRef is 
persisted across renders. This means that it's the same ref object 
(not just the same .current value) for the entire life of the component.

3. Accessing DOM nodes: One common use of refs is to access a specific 
DOM node or React element. By passing the ref object to the ref prop of a 
JSX element, you can then access that actual DOM node/React element via the 
.current property of the ref object. This is useful when you need to 
measure or modify the actual DOM node or React element.
*/

function UseRefExample1() {

  // create reference
  // changing the reference value does not re-render the component like changing state value
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = (e) => {
    // prevent default of POST or GET request or refreshing page
    e.preventDefault()
    // get DOM element input
    console.log(inputRef.current)
    // get the value from the input element
    console.log(inputRef.current.value)

    // change value of the DOM input element
    inputRef.current.value = "Hello"

    // can access and change the styling of the input element as well
    inputRef.current.style.backgroundColor = 'red'

    // works for non-input elements as well
    paraRef.current.innerText = 'Goodbye'
  }

  return (
    <div>
      <form onSubmit={onSubmit}>  
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          ref={inputRef} 
          id="name" 
          className="form-control mb-2" 
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {/* onClick handler focuses on input when clicking text */}
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hello</p>
      </form>
    </div>
  )
}

export default UseRefExample1