import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./components/global.styles";
import Header from "./components/header";

export class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
      </>
    );
  }
}
export default App;

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);