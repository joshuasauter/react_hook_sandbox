import UseRefExample1 from "./components/UseRefExample1";
import UseRefExample2 from "./components/UseRefExample2";
import UseRefExample3 from "./components/UseRefExample3";
import UseMemoExample from "./components/UseMemoExample";
import UseCallbackExample from "./components/UseCallbackExample";
import CustomHookExample1 from "./components/CustomHookExample1";
import CustomHookExample2 from "./components/CustomHookExample2";

function App() {
  return (
    <div className="container mt-5">
      <CustomHookExample2 />
      {/* <CustomHookExample1 /> */}
      {/* <UseCallbackExample /> */}
      {/* <UseMemoExample /> */}
      <hr />
    </div>
  )
}

export default App;

//<UseRefExample1 />
//<hr />
{/* <UseRefExample2 />
<hr />
<UseRefExample3 />
<hr /> */}