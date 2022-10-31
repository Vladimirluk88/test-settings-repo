// @ts-ignore
import React from "react";
import * as ReactDOM from "react-dom/client";
import Counter from "./components/Counter";


ReactDOM.createRoot(
    document.getElementById("root"),
  )
  .render(
    <React.StrictMode>
        <h1>Hello, world</h1>
        <Counter />
    </React.StrictMode>,
  );
