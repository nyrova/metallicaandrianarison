import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TestMaterialUI from "./components/TestMaterialUI";
import GroupeRock from "./components/GroupeRock";

function App() {
  let nom = "Hello Madagascar";

  return (
    <div className="App">
      <BrowserRouter>
        
        &nbsp;
        &nbsp;
        <Route path="/ui" component={TestMaterialUI}></Route>
      
        <Route path="/" component={TestMaterialUI} />
      </BrowserRouter>
    </div>
  );
}

export default App;
