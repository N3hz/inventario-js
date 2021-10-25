import React from 'react'
import { AdministracionComponent } from '../../components/AdministracionComponent';
import { BodegaComponent } from '../../components/BodegaComponent';
import { InicioComponent } from '../../components/InicioComponent';
import { useTitle } from '../../hooks/useTitle';
import { rutasContenido } from '../../types/pagesInicioTypes';

export const InicioPage = () => {

    const { title , setTitleMenu , estadoInicio, estadoBodega, estadoAdministracion } = useTitle(rutasContenido.inicio);

    const changeTitle = (ruta) => {
        setTitleMenu(ruta);
        var button = document.getElementById("togglerItem");
        button?.click();
    }

    return (
        <div className="fondoblue">
            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-3">
                        <h4 className="text-white">Menú</h4>
                        <ul>
                            <li><span className={estadoInicio} onClick={() => changeTitle(rutasContenido.inicio)}>Inicio</span></li>
                            <li><span className={estadoBodega} onClick={() => changeTitle(rutasContenido.bodegas)}>Bodegas</span></li>
                            <li><span className={estadoAdministracion} onClick={() => changeTitle(rutasContenido.administracion)}>Administración</span></li>
                        </ul>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <p className="centro-titulo">{title}</p>
                    <button id="togglerItem" className="navbar-toggler boton-margin" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
            <div className="row">
                { (title===rutasContenido.inicio) ? <InicioComponent /> : ""}
                { (title===rutasContenido.bodegas) ? <BodegaComponent /> : ""}
                { (title===rutasContenido.administracion) ? <AdministracionComponent /> : ""}
            </div>
        </div>
    )
}
