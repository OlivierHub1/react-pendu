import React from "react";
import { Modal, Button } from "react-bootstrap";

interface Props {
  result: string;
  message: string;
  color: string;
}

export const Alert: React.FC<Props> = ({ result, message, color }) => {
  return (
    <Modal show={true}>
      <Modal.Header>
        <Modal.Title>{result}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant={color} onClick={() => window.location.reload()}>
          Rejouer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
