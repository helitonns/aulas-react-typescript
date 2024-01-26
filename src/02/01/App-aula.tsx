import React from "react";
import Button from "./Button";

function App() {
  const [total, setTotal] = React.useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button className="btn" onClick={incrementar} tamanho={"1rem"}>Incrementar</Button>
    </div>
  );
}

export default App;
