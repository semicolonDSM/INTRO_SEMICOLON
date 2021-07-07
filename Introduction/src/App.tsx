import Header from "./components/Header/Header";
import FirstPage from "./components/Page1/FirstPage";
import { reset } from "./style/GlobalStyle";
import { Global } from "@emotion/react";
const App = (): JSX.Element => {
  return (
    <>
      <Global styles={reset} />
      <Header />
      <FirstPage />
    </>
  );
};

export default App;
