import { useState, useEffect } from "react";
import styled from "styled-components";
import Notes from "./patterns/organisms/Notes";
import Note from "./patterns/molecules/Note";
import Heading from "./patterns/atoms/Heading";
import Modal from "./patterns/organisms/Modal";

export default function App() {
  const storedNotes = localStorage.getItem("notes");

  const [notes, setNotes] = useState(
    storedNotes
      ? JSON.parse(storedNotes)
      : [
          {
            heading: "Your first note",
            note: "Click the button in the top right to start adding your notes 🙂",
            datetime: new Date().toLocaleString(),
          },
        ]
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <Main>
      <section id="notes">
        <header>
          <Heading level={1} text="Notes" />
          <Modal setNotes={setNotes} />
        </header>
        <Notes>
          {notes.map((note: { heading: string; note: string; datetime: string }, index: number) => (
            <li key={index}>
              <Note heading={note.heading} note={note.note} datetime={note.datetime} />
            </li>
          ))}
        </Notes>
      </section>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  min-height: 100%;
  padding: 1rem;

  section {
    max-width: 1300px;
    margin: clamp(24px, 24px + 2vw, 160px) auto auto auto;
  }

  section#notes header {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    margin-bottom: clamp(40px, 40px + 2vw, 128px);
  }
`;
