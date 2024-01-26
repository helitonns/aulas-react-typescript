import React from "react";
import Input from "./Input";

type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: string;
}

const App = () => {
  const [inicio, setInicio] = React.useState("");
  const [fim, setFim] = React.useState("");
  const [data, setData] = React.useState<null | Venda[]>(null);

  React.useEffect(()=> {
    if(inicio !== "" && fim !== ""){
      fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${fim}`)
      .then(response => response.json())
      .then(json => setData(json as Venda[]))
      .catch(error => console.log(error));
    }
  }, [inicio, fim]);

  return (
    <div>
      <div>
        <Input
          label="Data início"
          type="date"
          value={inicio}
          setState={setInicio}
        />
        <Input
          label="Data fim"
          type="date"
          value={fim}
          setState={setFim}
        />
      </div>
      <div>
        <ul>
          {data !== null && data.map((venda)=> (
            <li key={venda.id}>{venda.nome}: {venda.status}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
