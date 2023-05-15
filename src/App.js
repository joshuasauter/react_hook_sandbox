import { useState } from 'react'
import UseRefExample1 from "./components/UseRefExample1";
import UseRefExample2 from "./components/UseRefExample2";
import UseRefExample3 from "./components/UseRefExample3";
import UseMemoExample from "./components/UseMemoExample";
import UseCallbackExample from "./components/UseCallbackExample";
import CustomHookExample1 from "./components/CustomHookExample1";
import CustomHookExample2 from "./components/CustomHookExample2";

function App() {
  const [selectedChild, setSelectedChild] = useState('')

  const handleChange = (e) => {
    setSelectedChild(e.target.value)
  }

  return (
    <div className="container mt-5">
      <select onChange={handleChange}>
        <option value="">--Please choose an option--</option>
        <option value="child1">UseRef Example 1</option>
        <option value="child2">UseRef Example 2</option>
        <option value="child3">UseRef Example 3</option>
        <option value="child4">UseCallback Example</option>
        <option value="child5">UseMemo Example</option>
        <option value="child6">UseFetch Custom Example</option>
        <option value="child7">UseLocal Storage Example</option>
      </select>

      {selectedChild === "child1" && <UseRefExample1 />}
      {selectedChild === "child2" && <UseRefExample2 />}
      {selectedChild === "child3" && <UseRefExample3 />}
      {selectedChild === "child4" && <UseCallbackExample />}
      {selectedChild === "child5" && <UseMemoExample />}
      {selectedChild === "child6" && <CustomHookExample1 />}
      {selectedChild === "child7" && <CustomHookExample2 />}  
    </div>
  )
}

export default App;

