import React from "react";
import Input from "./Input";

function App() {

  const [data, setData] = React.useState("");

  return (
    <div>
      <Input id="nome" label="Nome"/>
      <Input id="email" label="E-mail" type="email"/>
      <Input value={data} onChange={(event)=> setData(event.currentTarget.value)} id="inicio" label="Início da Viagem" type="date"/>
      <Input id="horario" label="Horário" type="time"/>
      Data de início da viagem: {data}
    </div>
  );
}

export default App;
