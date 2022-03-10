import React from 'react'

import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Mensaje = styled.p`
  background-color: #265bda;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  color: white;
`

const ResultadoCotizacion =  styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: #265bda;
  margin-top: 1rem;
  position: relative;
`

const TextoTotal =  styled.p`
  color: #fff;
  padding: 1rem;
  text-transform: uppercase;
  margin: 0;
`

const Resultado = ({cotizacion}) => {
  return (
        
        (cotizacion === 0) ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> : 
        (
          <ResultadoCotizacion>
            <TransitionGroup
              component='span'
              className='resultado'>

              <CSSTransition
                classNames='resultado'
                key={cotizacion}
                timeout={{enter: 500, exit: 500}}>

                <TextoTotal>El total es: <span> {cotizacion} </span> €</TextoTotal>

              </CSSTransition>
            </TransitionGroup>
           
          </ResultadoCotizacion>
          )

        
        
  
  )
}

export default Resultado