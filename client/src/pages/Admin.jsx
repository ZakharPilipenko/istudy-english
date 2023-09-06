import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import CreateCard from "../components/UI/modals/CreateCard";
import CreateCardType from "../components/UI/modals/CreateCardType";
import CreateTheme from "../components/UI/modals/CreateTheme";
import CreateLevel from "../components/UI/modals/CreateLevel";
import { Context } from "../index.js";


const Admin = () => {
  const {card} = useContext(Context);
  const [cardVisible, setCardVisible] = useState(false);
  const [levelVisible, setLevelVisible] = useState(false);
  const [cardTypeVisible, setCardTypeVisible] = useState(false);
  const [themeVisible, setThemeVisible] = useState(false);



  const lastCard = () => {
  const cardData = card.cards.slice(); 
  if (cardData.length > 0) {
    const lastObject = cardData[cardData.length - 1];
    const lastObjectImage = lastObject.image;
    return lastObjectImage;
  }
  return null;
  };

  return (
    <Container className="d-flex flex-column position-relative z-index-10">
      <Button
        variant={"outline-dark"}
        className="mt-2 p-2"
        onClick={() => setLevelVisible(true)}
      >
        Добавить уровень игры
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2 p-2"
        onClick={() => setCardTypeVisible(true)}
      >
        Добавить тип карточки
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2 p-2"
        onClick={() => setThemeVisible(true)}
      >
        Добавить тематику карточек
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2 p-2"
        onClick={() => setCardVisible(true)}
      >
        Добавить карточку
      </Button>
      <CreateLevel
        show={levelVisible}
        onHide={() => setLevelVisible(false)}
      />
      <CreateCardType
        show={cardTypeVisible}
        onHide={() => setCardTypeVisible(false)}
      />
      <CreateTheme
        show={themeVisible}
        onHide={() => setThemeVisible(false)}
      />
      <CreateCard
        show={cardVisible}
        onHide={() => setCardVisible(false)}
      />
      <h2 className="lastCard-heading">Последняя добавленная карточка</h2>
      <div className="lastCard">
        {lastCard() 
        ? 
        <img src={"http://localhost:5000/" + lastCard()} width="204" height="144" alt=""/>
        :
        <img src="/assets/img/no-card.jpg" width="204" height="144" alt=""/>
        }
      </div>
    </Container>
  );
};

export default Admin;
