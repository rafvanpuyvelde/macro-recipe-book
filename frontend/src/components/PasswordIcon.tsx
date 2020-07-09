import React from "react";
import styled from "styled-components";

import SvgIcon from "./SvgIcon";

const Icon = styled(SvgIcon)`
  position: relative;
  top: 36px;
  left: 21px;
`;

const PasswordIcon = () => {
  return (
    <Icon width="24" height="24" fill="none">
      <path
        d="M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 1110 0v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default PasswordIcon;
