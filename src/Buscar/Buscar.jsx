import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BuscarDisplay from "../BuscarDisplay/BuscarDisplay";
import BuscarInput from "../BuscarInput/BuscarInput";
import ListGroup from 'react-bootstrap/ListGroup';
const Buscar = (props) => {
    const [buscar, setBuscar] = useState('');
    const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
    useEffect(() => {
        const resultados = props.lista.filter(reto =>
            reto.reto.toUpperCase().includes(buscar.toUpperCase())
        );
        setResultadosBusqueda(resultados);
    }, [buscar, props]);
    return (
        <fieldset className="border border-dark rounded p-3 mb-4 bg-light shadow">
            <legend>Búsqueda de reto</legend>
            <BuscarInput buscar={buscar}
                onSearchChange={setBuscar} />
            <BuscarDisplay buscar={buscar}
                onClear={() => setBuscar('')} />
            <br />
            Retos que cumplen con la búsqueda:
            <ListGroup>
                {resultadosBusqueda.map(item => (
                    <ListGroup.Item key={item.reto}>{item.reto}</ListGroup.Item>
                ))}

            </ListGroup>
        </fieldset>
    );
}

export default Buscar;