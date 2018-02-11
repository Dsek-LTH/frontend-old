import { action, observable } from "mobx";

export default class AppState {
  @observable public timer = 0;

  constructor() {
    setInterval(this.increment, 1000);
  }

  public resetTimer() {
    this.timer = 0;
  }

  @action.bound
  private increment() {
    this.timer += 1;
  }
}
