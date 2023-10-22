import styled from "styled-components";

interface Props {
  children: any;
}

const NotesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 64px;
  padding: 0;
  list-style-type: none;

  li {
    border-radius: clamp(10px, 10px + 1vw, 30px);
  }

  & li:nth-of-type(5n + 1) {
    background-color: #b692fe;
  }

  & li:nth-of-type(5n + 2) {
    background-color: #e6ee92;
  }

  & li:nth-of-type(5n + 3) {
    background-color: #00d4ff;
  }

  & li:nth-of-type(5n + 4) {
    background-color: #ffc972;
  }

  & li:nth-of-type(5n + 5) {
    background-color: #ff9b74;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

function Notes({ children }: Props) {
  return <NotesContainer>{children}</NotesContainer>;
}

export default Notes;
