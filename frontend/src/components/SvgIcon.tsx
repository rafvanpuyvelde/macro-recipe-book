import styled from "styled-components";
import Icon from "./Icon";

const SvgIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.primaryAccentColor};
`;

export default SvgIcon;
