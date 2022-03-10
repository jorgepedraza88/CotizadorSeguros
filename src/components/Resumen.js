import React from 'react'
import styled from '@emotion/styled'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #265bda;
    color: #fff;
    margin-top: 1rem;
`
const Lista = styled.li`
    text-transform: capitalize;
`
    const Resumen = ({datos}) => {

    // Extraer de datos
    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '') return null;

  return (
    <ContenedorResumen>
    <h2>Resumen de cotización</h2>
    <ul>
        <Lista><b>Marca:</b> {marca}</Lista>
        <Lista><b>Plan:</b> {plan}</Lista>
        <Lista><b>Año del auto:</b> {year}</Lista>
    </ul>

    </ContenedorResumen>
  )
}

export default Resumen