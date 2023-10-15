import { ChangeEventHandler } from "react";
import styled from "styled-components";

interface Props {
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler;
}

export default function Input({ id, name, placeholder, value, onChange }: Props) {
  return (
    <StyledInput
      id={id}
      name={name}
      placeholder={placeholder ? placeholder : ""}
      value={value}
      onChange={onChange}
      type="text"
      required
    />
  );
}

const StyledInput = styled.input`
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid lightgrey;
`;
