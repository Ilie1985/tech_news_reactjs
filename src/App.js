import React, { Fragment } from "react";
import SearchForm from "./SearchForm";
import Stories from "./Stories";
import Buttons from "./Buttons";

function App() {
  return (
    <Fragment>
      <SearchForm />
      <Buttons />
      <Stories />
    </Fragment>
  );
}

export default App;
