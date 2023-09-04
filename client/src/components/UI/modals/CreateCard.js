import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../../../index.js";
import { observer } from "mobx-react-lite";
import {
  createCard,
  fetchLevels,
  fetchThemes,
  fetchTypes,
} from "../../../http/CardAPI";

const CreateCard = observer(({ show, onHide }) => {
  const { card } = useContext(Context);
  const [token, setToken] = useState(""); // should be the same for both cards of one set
  const [audioFile, setAudioFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchTypes().then((data) => card.setTypes(data));
    fetchLevels().then((data) => card.setLevels(data));
    fetchThemes().then((data) => card.setThemes(data));
  }, []);

  const selectAudioFile = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const selectImageFile = (e) => {
    setImageFile(e.target.files[0]);
  };

  const addCard = () => {
    const formData = new FormData();
    formData.append("token", token);
    formData.append("cardType", card.selectedType.id);
    formData.append("levelId", card.selectedLevel.id);
    formData.append("themeId", card.selectedTheme.id);
    formData.append("audio", audioFile);
    formData.append("image", imageFile);
    createCard(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить карточку
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {card.selectedLevel.name || "Выберите уровень"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {card.levels.map((level) => (
                <Dropdown.Item
                  onClick={() => card.setSelectedLevel(level)}
                  key={level.id}
                >
                  {level.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {card.selectedType.name || "Выберите тип карточки"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {card.types.map((type) => (
                <Dropdown.Item
                  onClick={() => card.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {card.selectedTheme.name || "Выберите тематику уровня"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {card.themes.map((theme) => (
                <Dropdown.Item
                  onClick={() => card.setSelectedTheme(theme)}
                  key={theme.id}
                >
                  {theme.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            id="tokenInput"
            name="tokenInput"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="mt-2"
            placeholder="Введите токен-ключ для карточки"
          />
          <Form.Control
            className="mt-2"
            type="file"
            accept=".mp3"
            onChange={selectAudioFile}
            placeholder="Аудио"
          />
          <Form.Control
            className="mt-2"
            type="file"
            accept=".jpg"
            onChange={selectImageFile}
            placeholder="Картинка"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addCard}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateCard;
