import {useState} from 'react'
import { rutasContenido } from '../types/pagesInicioTypes';

export const useTitle = (titleInicio) => {
    
    const [title, setTitle] = useState( titleInicio );
    const [estadoInicio , setEstadoInicio] = useState("text-white cursorPointer");
    const [estadoBodega , setEstadoBodega] = useState("text-muted cursorPointer");
    const [estadoAdministracion , setEstadoAdministracion] = useState("text-muted cursorPointer");

    const setTitleMenu = (nuevoTitle) => {
        setTitle(nuevoTitle);
        setEstadoInicio("text-muted cursorPointer");
        setEstadoBodega("text-muted cursorPointer");
        setEstadoAdministracion("text-muted cursorPointer");

        switch (nuevoTitle) {
            case rutasContenido.inicio:
                    setEstadoInicio("text-white cursorPointer");
                break;
            case rutasContenido.bodegas:
                    setEstadoBodega("text-white cursorPointer");
                break;
            case rutasContenido.administracion:
                    setEstadoAdministracion("text-white cursorPointer");
                break;
            default:
                break;
        }
    }

    return { title, setTitleMenu , estadoInicio, estadoBodega, estadoAdministracion};
}
