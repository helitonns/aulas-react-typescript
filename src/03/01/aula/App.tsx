import React from "react";
import Button from "./Button";

function user(): User{
  return {
    nome: "André",
    profissao: "Designer"
  }
}

type User = {
  nome: string;
  profissao: string;
}

const App = () => {
  const [data, setData] = React.useState<null | User>(null);
  const [total, setTotal] = React.useState(0);
  
  React.useEffect(()=> {
    setTimeout(()=>{
      setData(user());
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        Total: {total}
        <Button incrementar={setTotal} />
      </div>
      {data !== null && 
        <div>
          <p>Nome: {data.nome}</p>
          <p>Profissão: {data.profissao}</p>
        </div>
      }
    </div>
  );
};

export default App;
