import * as React from "react";

import { BrowserRouter } from "react-router-dom";

import RenderRouter from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<h1>Loading ...</h1>}>
        <RenderRouter />
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
