import React from 'react'
import noticias from '../img/noticias.png';

export const AdministracionComponent = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div className="bloqueMotivo">
                        <div className="row">
                            <p className="fondoTituloSup">Usuarios</p>
                        </div>
                        <div className="row">
                            <img className="imgBloques" src={noticias} alt="usuarios" />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div className="bloqueMotivo">
                        <div className="row">
                            <p className="fondoTituloSup">Bodegas</p>
                        </div>
                        <div className="row">
                            <img className="imgBloques" src={noticias} alt="bodegas" />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div className="bloqueMotivo">
                        <div className="row">
                            <p className="fondoTituloSup">Sucursales</p>
                        </div>
                        <div className="row">
                            <img className="imgBloques" src={noticias} alt="sucursales" />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 d-flex justify-content-center">
                    <div className="bloqueMotivo">
                        <div className="row">
                            <p className="fondoTituloSup">Productos</p>
                        </div>
                        <div className="row">
                            <img className="imgBloques" src={noticias} alt="productos" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
