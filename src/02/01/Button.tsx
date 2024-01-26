import React from "react";

//poderia-se usar interface ao invés de type
// type ButtonProps = {
//   tamanho?: string;
//   children: React.ReactNode;
//   onClick?: ()=> void;
// }

//alternativa: não precisa indicar a propriedade children
// type ButtonProps = React.PropsWithChildren<{
//   tamanho?: string;
//   onClick?: ()=> void;
// }>;

//outra alternativa: indica que o componente pode receber qualquer propriedade que
//o componente button recebe por padrão
//para estender o tipo basta anotar com "&" com a definição do objeto
type ButtonProps = React.ComponentProps<"button"> & {
  tamanho?: string;
};

const Button = ({tamanho, children, ...props}: ButtonProps) => {
  return <button style={{fontSize: tamanho}} {...props}>{children}</button>;
};

export default Button;
