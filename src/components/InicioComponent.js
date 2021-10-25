import React from 'react'
import noticias from '../img/noticias.png';

export const InicioComponent = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div className="bloqueMotivo">
                        <div className="row">
                            <p className="fondoTituloSup">Informes</p>
                        </div>
                        <div className="row">
                            <img className="imgBloques" src={noticias} alt="informe" />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div className="bloqueMotivo">
                        <div className="row">
                            <p className="fondoTituloSup">Noticias</p>
                        </div>
                        <div className="row">
                            <img className="imgBloques" src={noticias} alt="noticias" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
