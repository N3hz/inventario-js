import React from 'react'
import { subMenuBodegas } from '../../types/pagesInicioTypes';
import atras from '../../img/atras.png';

export const SmAjusteInventario = ({parentStateSetter}) => {
    return (
        <div className="container">
            <img className="imgBloques" src={atras} alt="atrás" onClick={() => { parentStateSetter(subMenuBodegas.inventario) }} />
            <p>Ajuste Inventario</p>
        </div>
    )
}
