import styled from "styled-components";

interface Props {
  text: string;
}

export default function Text({ text }: Props) {
  return <StyledParagraph>{text}</StyledParagraph>;
}

const StyledParagraph = styled.p`
  margin-bottom: 1em;
  line-height: 1.5;
  font-size: clamp(1.125em, 1.125em + 0.5vw, 1.25em);
  color: black;
  overflow-wrap: anywhere;
`;
