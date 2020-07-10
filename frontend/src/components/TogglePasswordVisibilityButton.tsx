import React, { MouseEvent } from "react";
import styled from "styled-components";

import HideIcon from "./HideIcon";
import ShowIcon from "./ShowIcon";

const Button = styled.button`
  position: relative;
  top: -37px;
  left: 288px;
  background: none;
  border: none;
  outline: none;
`;

interface IProps extends React.HTMLAttributes<HTMLElement> {
  isCurrentlyVisible: boolean;
  onClick: (e: MouseEvent) => void;
}

const TogglePasswordVisibilityButton = (props: IProps) => {
  return (
    <Button
      type="button"
      onClick={props.onClick}
      aria-label="Show password as plain text. Warning: this will display your password on the screen."
    >
      {props.isCurrentlyVisible ? <ShowIcon /> : <HideIcon />}
    </Button>
  );
};

export default TogglePasswordVisibilityButton;
