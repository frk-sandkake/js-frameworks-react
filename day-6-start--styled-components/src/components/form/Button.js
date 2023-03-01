import styled from "styled-components";

const Button = styled.button`
  color: white;
  background-color: ${(props) => props.theme.secondaryColour};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  height: 78px;
  border-radius: 0.5rem;
  border: none;
  margin-bottom: 1rem;
`;

export default Button;

export const DangerButton = styled(Button)`
  background-color: ${(props) => props.theme.dangerColour};
  height: 46px;
`;
