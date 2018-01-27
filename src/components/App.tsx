import * as React from "react";

export interface IAppProps {
  compiler: string;
  framework: string;
}

export function App(props: IAppProps) {
  return (
    <h1>
      Hello from {props.compiler} and {props.framework}!
    </h1>
  );
}
