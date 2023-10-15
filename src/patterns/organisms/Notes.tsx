import styled from "styled-components";

interface Props {
  children: any;
}

const NotesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 64px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  & > div:nth-of-type(5n + 1) {
    background-color: #b692fe;
  }

  & > div:nth-of-type(5n + 2) {
    background-color: #e6ee92;
  }

  & > div:nth-of-type(5n + 3) {
    background-color: #00d4ff;
  }

  & > div:nth-of-type(5n + 4) {
    background-color: #ffc972;
  }

  & > div:nth-of-type(5n + 5) {
    background-color: #ff9b74;
  }
`;

function Notes({ children }: Props) {
  return <NotesContainer>{children}</NotesContainer>;
}

export default Notes;
