import React from "react";
import styled from "styled-components";

import SvgIcon from "./SvgIcon";

const Icon = styled(SvgIcon)`
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${(props) => props.theme.secondaryAccentColor};
  }
`;

const ShowIcon = () => {
  return (
    <Icon width="24" height="24" fill="none">
      <path
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ShowIcon;
