import { observer } from "mobx-react";
import * as React from "react";
import { Link, Route, RouteComponentProps, withRouter } from "react-router-dom";

import Timer from "./Timer";

export interface IAppProps extends RouteComponentProps<IAppProps> {}

@observer
class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <h1>D-sektionen</h1>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/timer">Timer</Link>
        </p>
        <Route path="/timer" component={Timer} />
      </div>
    );
  }
}

// Avoids blocked render when location changes
export default withRouter(App);
