import React from 'react';
import noticias from '../../img/noticias.png';
import oc from '../../img/oc.png';
import ventaOnline from '../../img/ventaOnline.png';
import despachoSucursal from '../../img/despachoSucursal.png';
import ajusteInventario from '../../img/ajusteInventario.png';
import { subMenuBodegas } from '../../types/pagesInicioTypes';


export const InventarioComponent = ({parentStateSetter}) => {
    return (
        <div>
            <div className="row align-items-center">
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div className="bloqueMotivo">
                        <div className="row">
                            <p className="fondoTituloSup">Ingresos por OC</p>
                        </div>
                        <div className="row">
                            <img className="imgBloques" src={oc} alt="oc" onClick={()=>{ parentStateSetter(subMenuBodegas.subMenuIngresoOC) }} />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div className="bloqueMotivo">
                        <div className="row">
                            <p className="fondoTituloSup"> Ajustes de Inventario</p>
                        </div>
                        <div className="row">
                            <img className="imgBloques" src={ajusteInventario} alt="ajustes" onClick={()=>{ parentStateSetter(subMenuBodegas.subAjusteInventario) }} />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div className="bloqueMotivo">
                        <div className="row">
                            <p className="fondoTituloSup"> Venta Online</p>
                        </div>
                        <div className="row">
                            <img className="imgBloques" src={ventaOnline} alt="ventaON" onClick={()=>{ parentStateSetter(subMenuBodegas.ventaOnline) }}/>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div className="bloqueMotivo">
                        <div className="row">
                            <p className="fondoTituloSup"> Despacho a Sucursal</p>
                        </div>
                        <div className="row">
                            <img className="imgBloques" src={despachoSucursal} alt="despacho" onClick={()=>{ parentStateSetter(subMenuBodegas.subDespachoASucursal) }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
