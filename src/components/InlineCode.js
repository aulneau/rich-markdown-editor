// @flow
import styled from "styled-components";

const InlineCode = styled.code.attrs({
  spellCheck: false,
})`
  padding: 0.15em;
  background: ${props => props.theme.codeBackground};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.codeBorder};
`;

export default InlineCode;
