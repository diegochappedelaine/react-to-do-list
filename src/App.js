import React from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./containers/Main";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </DndProvider>
  );
}

export default App;
