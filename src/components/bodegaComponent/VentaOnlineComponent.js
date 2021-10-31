import React from 'react'
import noticias from '../../img/noticias.png';
import atras from './../../img/atras.png';
import { subMenuBodegas } from '../../types/pagesInicioTypes';

export const VentaOnlineComponent = ({parentStateSetter}) => {

    return (
        <div>
            <div className="row align-items-center">
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div className="bloqueMotivo">
                        <div className="row">
                            <p className="fondoTituloSup">Atrás</p>
                        </div>
                        <div className="row">
                            <img className="imgBloques" src={atras} alt="atrás" onClick={()=>{ parentStateSetter(subMenuBodegas.inventario) }} />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div className="bloqueMotivo">
                        <div className="row">
                            <p className="fondoTituloSup">Ml Imprink</p>
                        </div>
                        <div className="row">
                            <img className="imgBloques" src={noticias} alt="ml imprink" onClick={()=>{ parentStateSetter(subMenuBodegas.sumMlImprink) }}  />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div className="bloqueMotivo">
                        <div className="row">
                            <p className="fondoTituloSup">Ml Berny</p>
                        </div>
                        <div className="row">
                            <img className="imgBloques" src={noticias} alt="mlberny" onClick={()=>{ parentStateSetter(subMenuBodegas.sumMlBerny) }} />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div className="bloqueMotivo">
                        <div className="row">
                            <p className="fondoTituloSup">Página</p>
                        </div>
                        <div className="row">
                            <img className="imgBloques" src={noticias} alt="pagina" onClick={()=>{ parentStateSetter(subMenuBodegas.sumPagina) }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
