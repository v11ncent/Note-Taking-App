import { Button as BaseButton } from "@mui/base/Button";
import styled from "styled-components";

interface Props {
  text: string;
  onClick: Function;
}

export default function Button({ text, onClick }: Props) {
  return <CustomButton onClick={onClick}>{text}</CustomButton>;
}

const CustomButton = styled(BaseButton)`
  padding: 0.75rem 1.5rem;
  color: white;
  background-color: black;
  border-radius: 2em;
  border: 0;
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 200ms cubic-bezier(0.785, 0.135, 0.15, 0.86);

  &:hover {
    background-color: #b692fe;
  }
`;
