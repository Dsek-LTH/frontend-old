import autobind from "autobind-decorator";
import { inject, observer } from "mobx-react";
import * as React from "react";

import TimerState from "../model/TimerState";
import "./Timer.scss";

export interface ITimerProps {
  timer?: TimerState;
}

@inject("timer")
@observer
class Timer extends React.Component<ITimerProps> {
  public render() {
    const { timer } = this.props;
    return (
      <div>
        <h1 className="timer-header">Timer {timer.timer}</h1>
        <button type="button" onClick={this.handleReset}>
          Reset Timer
        </button>
      </div>
    );
  }

  @autobind
  private handleReset() {
    this.props.timer.resetTimer();
  }
}

export default Timer;
