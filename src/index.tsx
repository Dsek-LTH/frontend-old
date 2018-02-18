import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import TimerState from "./model/TimerState";

const stores = {
  timer: new TimerState(),
};

function render(Component: typeof App) {
  ReactDOM.render(
    <AppContainer>
      <Provider {...stores}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
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
