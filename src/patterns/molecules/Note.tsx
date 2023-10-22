import styled from "styled-components";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Datetime from "../atoms/Datetime";

interface Props {
  heading: string;
  note: string;
  datetime: Date;
}

export default function Note({ heading, note, datetime }: Props) {
  return (
    <NoteContainer className="note">
      <div>
        <Heading level={2} text={heading} />
        <Text text={note} />
      </div>
      <Datetime datetime={datetime} />
    </NoteContainer>
  );
}

const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 350px;
  padding: clamp(1em, 1em + 0.5vw, 2em) clamp(0.75em, 0.75em + 0.5vw, 1.75em);
  transition: all 200ms cubic-bezier(0.785, 0.135, 0.15, 0.86);

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
