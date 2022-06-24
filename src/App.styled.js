//Basics
// import styled, { css, keyframes } from "styled-components";
import styled, { css } from "styled-components";
import React from "react";

//minimal example of styled components
export const Button = styled.button`
  border: none;
  width: 200px;
  height: 50px;
  padding: 10px;
  margin: 15px;
  text-align: center;
  border-radius: 10px;
  background: black;
  text-decoration: none;
  color: ${({ color }) => (color ? color : "white")};
  cursor: pointer;
`;

//modifying button derived properties from Button
export const TomatoButton = styled(Button)`
  background: Tomato;
  color: #fff;
`;

//props passing
export const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

//accessing and defining attributes
export const Input = styled.input.attrs({ type: "checkbox" })``;

//custom styling
export const Label = styled.label`
  display: flex;
  align-itmes: center;
  padding-bottom: 3em;
`;
export const LabelText = styled.span`
  ${(props) => {
    switch (props.$mode) {
      case "dark":
        return css`
          background-color: black;
          color: white;
          ${Input}:checked + && {
            color: red;
          }
        `;
      default:
        return css`
          background-color: white;
          color: black;
          ${Input}:checked + && {
            color: red;
          }
        `;
    }
  }}
`;

//selectors
export const Thing = styled.div`
  color: brown;
  &:hover {
    color: red;
  }
  & ~ & {
    border: 1px solid red;
  }
  & + & {
    background: tomato;
  }
  &.something {
    color: purple;
  }
  .something-else & {
    color: green;
  }
`;

//props styling
export const TextInput = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid black;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;
export const PasswordInput = styled(TextInput).attrs({
  type: "password",
})`
  border: 2px solid red;
`;

//animation
// const rotate = keyframes`
// from{
//     transform: rotate(0deg);
// }
// to{
//     transform: rotate(360deg);
// }
// `;

// export const Rotate = styled.div`
// margin: inline-block;
// animation: ${rotate} 2s linear infinite;
// padding: 2rem 1rem;
// font-size: 1.2rem;
// `
export const ThemeButton = styled.button`
color: ${(props) => props.theme.main};
background: black
padding: 2rem 1rem;
border: 1px solid ${(props) => props.theme.main};
width: 250px;
height: 30px;
`;

ThemeButton.defaultProps = {
  theme: {
    main: "green",
  },
};
export const theme = {
  main: "blue",
};
