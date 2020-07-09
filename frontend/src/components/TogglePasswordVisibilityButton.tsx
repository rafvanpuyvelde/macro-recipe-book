import React from "react";
import styled from "styled-components";

import SvgIcon from "./SvgIcon";
import HideIcon from "./HideIcon";
import ShowIcon from "./ShowIcon";

const Button = styled.button`
  position: relative;
  top: -37px;
  left: 288px;
  background: none;
  border: none;
`;

const VisibilityIcon = styled(SvgIcon)`
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.secondaryAccentColor};
  }
`;

interface IProps extends React.HTMLAttributes<HTMLElement> {
  isCurrentlyVisible: boolean;
}

const TogglePasswordVisibilityButton = (props: IProps) => {
  return (
    <Button aria-label="Show password as plain text. Warning: this will display your password on the screen.">
      <VisibilityIcon width="24" height="24" fill="none">
        {props.isCurrentlyVisible ? <HideIcon /> : <ShowIcon />}
      </VisibilityIcon>
    </Button>
  );
};

export default TogglePasswordVisibilityButton;
