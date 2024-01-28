import Content from "./Content";
import Header from "./Header";
import { UserContextProvider } from "./UserContext";

const App = () => {
  return (
    <UserContextProvider>
        <Header />
        <Content />
    </UserContextProvider>
  );
};

export default App;
