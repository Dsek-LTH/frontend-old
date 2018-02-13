import { observer } from "mobx-react";
import * as React from "react";

import Timer from "./Timer";

@observer
export default class App extends React.Component {
  public render() {
    return <Timer />;
  }
}
