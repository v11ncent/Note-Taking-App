import React from "react";
import { Modal as BaseModal } from "@mui/base/Modal";
import styled from "styled-components";
import clsx from "clsx";
import Button from "../atoms/Button";
import Form from "../molecules/Form";

interface Props {
  setNotes: Function;
}

export default function Modal({ setNotes }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button text="Add a note" onClick={handleOpen} />
      <StyledModal
        aria-labelledby="New note form"
        aria-describedby="Fill in the form to make a new note"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <Form setNotes={setNotes} handleClose={handleClose} />
      </StyledModal>
    </div>
  );
}

const Backdrop = React.forwardRef<HTMLDivElement, { open?: boolean; className: string }>(
  (props, ref) => {
    const { open, className, ...other } = props;
    return <div className={clsx({ "MuiBackdrop-open": open }, className)} ref={ref} {...other} />;
  }
);

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.25);
  -webkit-tap-highlight-color: transparent;
`;

const StyledModal = styled(BaseModal)`
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
