import styled from "styled-components";

interface Props {
  level: number;
  text: string;
}

export default function Heading({ level, text }: Props) {
  if (level === 1) {
    return <H1>{text}</H1>;
  } else if (level === 2) {
    return <H2>{text}</H2>;
  }
}

const H1 = styled.h1`
  line-height: 1.25;
  font-size: 3em;
  font-weight: 500;
  color: black;
`;

const H2 = styled.h2`
  margin-bottom: 1em;
  line-height: 1.25;
  font-size: clamp(1.5em, 1.5em + 0.5vw, 2em);
  font-weight: 500;
  color: black;
`;
