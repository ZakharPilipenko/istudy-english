import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { createLevel } from "../../../http/CardAPI";

const CreateLevel = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const addLevel = () => {
    createLevel({ name: value }).then((data) => setValue(""));
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить уровень
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            id="levelInput"
            name="levelInput"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={"Введите название уровня"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addLevel}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateLevel;
