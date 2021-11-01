import React from 'react'
import { subMenuBodegas } from '../../types/pagesInicioTypes';
import atras from '../../img/atras.png';

export const SmIngresoOc = ({ parentStateSetter }) => {
    return (
        <div className="container">
            <div className="DgTabla">
                <div className='row'>
                    <div className='col-xl-12 col-lg-12 col-td'>
                        INGRESO POR ORDEN DE COMPRA
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        N° Orden
                    </div>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        <input className='form-control input-xs' />
                    </div>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        Fecha Orden
                    </div>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        <input className='form-control input-xs' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        Proveedor
                    </div>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        <input className='form-control input-xs' />
                    </div>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        Fecha Entrega
                    </div>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        <input className='form-control input-xs' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        Bodega Ingreso
                    </div>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        <input className='form-control input-xs' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        Detalles
                    </div>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        <textarea id="oldText" name="oldText" rows="6" cols="22"></textarea>
                    </div>
                </div>
                <div className='row'>
                    <hr />
                </div>
                <div className='row'>
                    <div className='col-xl-8 col-lg-8 col-td'>
                        DETALLE
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        Código Producto
                    </div>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        <input className='form-control input-xs' />
                    </div>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        Cantidad
                    </div>
                    <div className='col-xl-2 col-lg-6 col-td'>
                        <input className='form-control input-xs' />
                    </div>
                </div>
                <div className='row'>
                    <div className="col">
                        <table className="tableLeft" border="1">
                            <thead>
                                <tr>
                                    <td>Código</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}
