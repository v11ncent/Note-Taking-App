import { ChangeEvent, ChangeEventHandler, useState } from "react";
import styled from "styled-components";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

interface Props {
  setNotes: Function;
  handleClose: Function;
}

export default function Form({ setNotes, handleClose }: Props) {
  const [values, setValues] = useState({ title: "", note: "" });

  const handleInputChange: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    setNotes((notes: { heading: string; note: string }[]) => [
      ...notes,
      { heading: values.title, note: values.note, datetime: new Date() },
    ]);
    handleClose();
  };

  return (
    <StyledForm>
      <div className="inputs">
        <div className="group">
          <Label htmlFor="title" label="Enter a title" />
          <Input
            id="title"
            name="title"
            placeholder="My epic note"
            value={values.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="group">
          <Label htmlFor="note" label="Enter your note" />
          <Input
            id="note"
            name="note"
            placeholder="Hello, world! Today I had eggs for breakfast."
            value={values.note}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <Button text={"Add your new note"} onClick={handleSubmit} />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  width: min(100%, 600px);
  height: min(100%, 600px);
  background-color: white;
  border-radius: clamp(10px, 10px + 1vw, 30px);
  padding: clamp(1.5em, 1.5em + 0.5vw, 2.5em);

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
