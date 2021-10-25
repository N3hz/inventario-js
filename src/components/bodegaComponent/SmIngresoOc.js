import React from 'react'
import { subMenuBodegas } from '../../types/pagesInicioTypes';
import atras from '../../img/atras.png';

export const SmIngresoOc = ({parentStateSetter}) => {
    return (
        <div className="container">
            <img className="imgBloques" src={atras} alt="atrás" onClick={() => { parentStateSetter(subMenuBodegas.inventario) }} />
            <p>Ingreso por OC</p>
        </div>
    )
}
