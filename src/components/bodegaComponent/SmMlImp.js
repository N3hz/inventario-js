import React from 'react'
import { subMenuBodegas } from '../../types/pagesInicioTypes';
import atras from '../../assets/img/atras.png';

export const SmMlImp = ({parentStateSetter}) => {
    return (
        <div className="container">
            <img className="imgBloques" src={atras} alt="atrás" onClick={() => { parentStateSetter(subMenuBodegas.ventaOnline) }} />
            <p>Ml Imprink</p>
        </div>
    )
}
