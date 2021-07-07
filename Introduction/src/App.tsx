import Header from "./components/Header/Header";
import { reset } from "./style/GlobalStyle";
import { Global } from "@emotion/react";
const App = ():JSX.Element => {

  return (
    <>
      <Global styles={reset} />
      <Header />
    </>
  );
}

export default App;