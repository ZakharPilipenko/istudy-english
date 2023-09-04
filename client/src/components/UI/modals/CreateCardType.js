import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { createType } from "../../../http/CardAPI";

const CreateCardType = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const addCardType = () => {
    createType({ name: value }).then((data) => setValue(""));
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тип карточки
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            id="typeInput"
            name="typeInput"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={"Введите название типа карточки"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addCardType}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCardType;
