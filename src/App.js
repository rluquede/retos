import React from "react";
import { useState } from "react";
import NuevoReto from "./NuevoReto/NuevoReto";
import ListaRetos from "./ListaRetos/ListaRetos";
import Buscar from "./Buscar/Buscar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const retosIniciales = [
  {
    personaje: 'Julio César',
    reto: 'Julio César 007',
    descripcion: "Julio César necesita un codificador y decodificador de mensajes utilizando el sistema que él mismo inventó: Cifrado César. ¿Le echamos una mano?",
    hecho: true
  },
  {
    personaje: 'Marc Zuckerberg',
    reto: 'Redes sociales',
    descripcion: "Resolvemos el reto en el que Mark Zuckerberg, creador de Facebook, necesita un sistema para controlar que las personas que se dan de alta en sus redes sociales",
    hecho: true
  },
  {
    personaje: 'Cameron Howe',
    reto: 'Un contador de Megustas para Mutiny',
    descripcion: "Cameron Howe, protagonista de Halt and Catch Fire, necesita un contador de «Me gusta» para su comunidad online Mutiny a partir de una lista de nombres",
    hecho: false
  }
];

const App = () => {
  const [retos, setRetos] = useState(retosIniciales);
  return (
    <Container>
      <Row>
        <h1>
          Los retos de Ada y Edu
        </h1>
      </Row>
      <Row>
        <Col>
          <NuevoReto onNewReto={reto => setRetos([reto, ...retos])} />
        </Col>
        <Col>
        <Buscar lista={retos}></Buscar>
        </Col>
      </Row>
      <ListaRetos lista={retos} />
    </Container>
  );

}
//[valor, setValor] = useState(valorDefecto);
export default App;