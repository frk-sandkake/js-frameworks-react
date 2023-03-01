import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 1rem;
  height: 3rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${(props) => props.theme.borderColour};
`;

const Input = (props) => {
    return (
        <StyledInput placeholder={props.placeholder} colour={props.colour} />
    );
};

export default StyledInput;