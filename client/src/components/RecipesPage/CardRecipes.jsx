import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, CardBody, CardText, CardTitle, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CardRecipes({ recipe }) {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setModal(!modal);
    navigate('/recipes');
  };

  useEffect(() => {
    setModal(modal);
  }, []);
  return (
    <>
      <Card
        style={{
          width: '25rem',
        }}
      >
        <img
          alt="Фото не найдено"
          src={recipe.image}
        />
        <CardBody>
          <CardTitle tag="h5">
            {recipe.title}
          </CardTitle>
          <CardText>
            {recipe.ingridients.replace(/\//gm, '. ')}
          </CardText>
        </CardBody>
        <CardBody>
          <Button onClick={toggle}>
            Посмотреть рецепт
          </Button>
        </CardBody>
      </Card>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
            {recipe.recipes}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Закрыть
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
