import { useState } from "react";
import Container from "./component/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-custom-black ">
        <Container />
      </div>
    </>
  );
}

export default App;
