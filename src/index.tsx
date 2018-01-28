import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./components/App";
import AppState from "./model/AppState";

const app = new AppState();

function render(Component: typeof App) {
  ReactDOM.render(
    <AppContainer>
      <Component app={app} />
    </AppContainer>,
    document.getElementById("root"),
  );
}

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(require("./components/App").default);
  });
}
