import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

// A popup modal to show details about different delivery methods
export default function HelpModal() {
  // Setting the initial state of the modal
  const [show, setShow] = useState(false);

  // Functions to handle show or close of the modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Help
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              <b>Home Delivery (Express): </b> The items will be delivered
              straight to your home in 1-2 working days.
            </li>
            <li>
              <b>Home Delivery (Standard): </b>The items will be delivered
              straight to your home in 3-5 working days.
            </li>
            <li>
              <b>Click and Collect: </b> You collect the items from the store.
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
