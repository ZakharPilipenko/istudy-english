import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { createTheme } from "../../../http/CardAPI";

const CreateTheme = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const addTheme = () => {
    createTheme({ name: value }).then((data) => setValue(""));
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тематику уровеня
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            id="themeInput"
            name="themeInput"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={"Введите название тематики уровня"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addTheme}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateTheme;
