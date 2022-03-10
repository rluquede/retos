import React from "react";
import { useState } from "react";
import { Card, Form,Button } from "react-bootstrap";
const Reto = (props) => {
  const [hecho, setHecho] = useState(props.dato.hecho);
  const [modPersonajeReto, setModPersonajeReto] = useState(props.dato.personaje);
  const [modNombreReto, setModNombreReto] = useState(props.dato.reto);
  const [modDescripcionReto, setModDescripcionReto] = useState(props.dato.descripcion);
  const [modificando, setModificando] = useState(false);
  function manejarClick(e) {
    e.preventDefault();
    props.dato.personaje = modPersonajeReto;
    props.dato.reto = modNombreReto;
    props.dato.descripcion = modDescripcionReto;
    setModificando(false);
  }
  if (modificando) {
    return (
      <Card>
        <Form>
          <Card.Header onClick={() => setHecho(!hecho)}>
            {hecho ? 'X' : '0'} &nbsp;
            <Form.Control
              value={modNombreReto}
              onChange={e => setModNombreReto(e.target.value)} />
          </Card.Header>
          <Card.Body>
            <Form.Control
            as="textarea"
              onChange={e => setModDescripcionReto(e.target.value)}
              defaultValue={modDescripcionReto}>
            </Form.Control>
            <br />
            <blockquote className="blockquote mb-0">
              Encargado por:
              <Form.Control
                value={modPersonajeReto}
                onChange={e => setModPersonajeReto(e.target.value)} />
            </blockquote>
            <br />
            <Button variant="danger" onClick={manejarClick}>
              Guardar reto
            </Button>
          </Card.Body>
        </Form>
      </Card>
    )
  } else {

    return (
      <Card>
        <Card.Header as="h3" onClick={() => setHecho(!hecho)}>
          {hecho ? 'X' : '0'} &nbsp;
          {props.dato.reto}
        </Card.Header>
        <Card.Body>
          <Card.Text>{props.dato.descripcion}</Card.Text>
          <br />
          <h4 className="blockquote-footer">
            Encargado por: {props.dato.personaje}
          </h4>
          <br />
          <Button variant="warning" onClick={() => setModificando(true)}>
            Modificar reto
          </Button>

        </Card.Body>
        </Card>
        );
  }
}
        export default Reto;