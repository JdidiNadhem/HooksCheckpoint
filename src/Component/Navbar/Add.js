import React, {useState} from "react";
import {Modal, Button, Form} from "react-bootstrap";

const Add = ({handleMovie}) => {
  const [show, setShow] = useState(false);
  const [name, setname] = useState("");
  const [banner, setbanner] = useState("");
  const [type, settype] = useState("");
  const [description, setdescription] = useState("");
  const [rating, setrating] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addmovie = () => {
    handleMovie({name, banner, type, description, rating});
    handleClose();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Movie Name:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setname(e.target.value)}
            />
            <Form.Label>Movie Banner:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setbanner(e.target.value)}
            />
            <Form.Label>Movie Type:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => settype(e.target.value)}
            />
            <Form.Label>Movie Description:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setdescription(e.target.value)}
            />
            <Form.Label>Movie Rating:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setrating(e.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addmovie}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
