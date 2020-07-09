import React from "react";
import styled from "styled-components";

import SvgIcon from "./SvgIcon";

const Icon = styled(SvgIcon)`
  position: relative;
  top: 36px;
  left: 21px;
`;

const MailIcon = () => {
  return (
    <Icon width="24" height="24" fill="none">
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6l-10 7L2 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default MailIcon;
