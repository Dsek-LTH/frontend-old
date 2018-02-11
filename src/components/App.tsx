import autobind from "autobind-decorator";
import { observer } from "mobx-react";
import * as React from "react";

import AppState from "../model/AppState";
import "./App.scss";

export interface IAppProps {
  app: AppState;
}

@observer
class App extends React.Component<IAppProps> {
  public render() {
    const { app } = this.props;
    return (
      <div>
        <h1 className="app-header">Timer {app.timer}</h1>
        <button type="button" onClick={this.handleReset}>
          Reset Timer
        </button>
      </div>
    );
  }

  @autobind
  private handleReset() {
    this.props.app.resetTimer();
  }
}

export default App;
