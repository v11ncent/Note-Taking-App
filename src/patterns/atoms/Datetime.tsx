import styled from "styled-components";

interface Props {
  datetime: Date;
}

export default function Datetime({ datetime }: Props) {
  return <Time dateTime={datetime.toLocaleString()}>{datetime.toLocaleString()}</Time>;
}

const Time = styled.time`
  line-height: 1.25;
  color: black;
  font-weight: 500;
  font-size: clamp(1em, 1em + 0.5vw, 1.125em);
`;
