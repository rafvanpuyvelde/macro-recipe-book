import styled from "styled-components";

const GradientButton = styled.button`
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamily};
  border: none;
  background: ${(props) => props.theme.primaryGradient};
  box-shadow: ${(props) => props.theme.primaryGradientShadow};
  border-radius: 50px;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  padding: 15px 47px 15px 47px;
`;

export default GradientButton;
