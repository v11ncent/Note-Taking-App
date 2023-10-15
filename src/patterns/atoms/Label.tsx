import styled from "styled-components";

interface Props {
  htmlFor: string;
  label: string;
}

export default function Label({ htmlFor, label }: Props) {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {label} <span className="red">*</span>
    </StyledLabel>
  );
}

const StyledLabel = styled.label`
  font-size: clamp(1.125em, 1.125em + 0.5vw, 1.25em);

  .red {
    color: red;
  }
`;
