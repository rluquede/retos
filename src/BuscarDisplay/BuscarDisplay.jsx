import React from "react";
import Button from 'react-bootstrap/Button';
const BuscarDisplay = ({ buscar, onClear }) => (
    <div>
        <p>Búsqueda actual: <br /> {buscar}</p>
        <Button variant="primary" onClick={onClear}>Limpiar busqueda</Button>
    </div>
);
export default BuscarDisplay