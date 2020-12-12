import React from "react";
import { NavbarComponent } from "./components/NavbarComponent";
import ProductsContainer from "./containers/ProductsContainer";

class App extends React.Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <ProductsContainer />
      </>
    );
  }
}

export default App;
