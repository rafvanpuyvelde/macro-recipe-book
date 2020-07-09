import styled from "styled-components";

const PrimaryHeading = styled.h1`
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: ${(props) => props.theme.primaryTextColor};
`;

export default PrimaryHeading;
