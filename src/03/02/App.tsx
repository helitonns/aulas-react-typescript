import React from "react";


const App = () => {

  React.useEffect(()=> {
    console.log("montou");

    return ()=> {
      console.log("desmontou");
    }
  }, []);

  return (
    <div>
      Effect
    </div>
  );
};

export default App;
