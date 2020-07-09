import styled from "styled-components";

const RoundedInput = styled.input`
  border: none;
  border-radius: 50px;
  background-color: ${(props) => props.theme.secondaryColor};
  height: 50px;
  width: 335px;
  padding: 0 50px 0 73px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: ${(props) =>
    props.theme.mode === "light"
      ? props.theme.primaryTextColor
      : props.theme.secondaryTextColor};

  &:focus {
    outline: none;
    box-shadow: 0px 1px 8px 4px ${(props) => props.theme.secondaryAccentColor};
  }
`;

export default RoundedInput;
