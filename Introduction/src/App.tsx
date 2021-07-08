import Header from "./components/Header/Header";
import FirstPage from "./components/Home/Home";
import { reset } from "./style/GlobalStyle";
import { Global } from "@emotion/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Introduction from "./components/Introduction/Introduction";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Global styles={reset} />
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/introduction" component={Introduction}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contactus" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
