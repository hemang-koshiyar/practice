import React from "react";
import Advanced from "./Advanced.js";

import {
  Button,
  ReversedButton,
  TomatoButton,
  Input,
  Label,
  LabelText,
  Thing,
  PasswordInput,
  TextInput,
  // Rotate,
} from "./App.styled.js";
const App = () => {
  return (
    <React.Fragment>
      <div>
        <Button>Normal Button</Button>
        <TomatoButton as="a" href="#">
          Tomato Button
        </TomatoButton>
        <Button as={ReversedButton}>Custom Button</Button>
      </div>

      <Label>
        <Input defaultChecked />
        <LabelText>Hello World</LabelText>
      </Label>
      <Label>
        <Input />
        <LabelText $mode="dark">Hello World</LabelText>
      </Label>
      <Label>
        <Input defaultChecked />
        <LabelText $mode="dark">Hello World</LabelText>
      </Label>

      <Thing>First Thing</Thing>
      <Thing>Second Thing</Thing>
      <div>Hello World</div>
      <Thing className="something">Third Thing</Thing>
      <div className="something-else">
        <Thing>Fourth Thing</Thing>
      </div>

      <TextInput placeholder="Enter text" size="2em" />
      <PasswordInput placeholder="Enter password" size="2em" />

      {/* <Rotate>&lt; &gt;</Rotate> */}
      <Advanced />
    </React.Fragment>
  );
};

export default App;
