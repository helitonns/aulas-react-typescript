import React from "react";
import Input from "./Input";

type State = {
  nome: string;
  email: string;
};

type Action = {
  type: "setNome" | "setEmail";
  payload: string;
};

function reducer(state: State, action: Action) {
  if (action.type === "setEmail") {
    return {
      ...state,
      email: action.payload,
    };
  }
  if (action.type === "setNome") {
    return {
      ...state,
      nome: action.payload,
    };
  }
  return state;
}

const Form = () => {
  const [state, dispatch] = React.useReducer(reducer, { nome: "", email: "" });

  return (
    <div>
      <h1>Formulario</h1>
      <Input
        label="Nome"
        value={state?.nome}
        onChange={({ target }) =>
          dispatch({
            type: "setNome",
            payload: target.value,
          })
        }
      />
      <Input
        label="Email"
        value={state?.email}
        onChange={({ target }) =>
          dispatch({
            type: "setEmail",
            payload: target.value,
          })
        }
      />
      <p>Nome: {state.nome}</p>
      <p>Email: {state.email}</p>
      
    </div>
  );
};

export default Form;
