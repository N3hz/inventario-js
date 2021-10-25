import React,{useState,useCallback} from 'react'
import { InventarioComponent } from './bodegaComponent/InventarioComponent'
import { VentaOnlineComponent } from './bodegaComponent/VentaOnlineComponent'
import { subMenuBodegas } from '../types/pagesInicioTypes';
import { SmIngresoOc } from './bodegaComponent/SmIngresoOc';
import { SmAjusteInventario } from './bodegaComponent/SmAjusteInventario';
import { SmDespachoSuc } from './bodegaComponent/SmDespachoSuc';
import { SmMlImp } from './bodegaComponent/SmMlImp';
import { SmMlBerny } from './bodegaComponent/SmMlBerny';
import { SmPagina } from './bodegaComponent/SmPagina';

const subMenuBodegaInit = subMenuBodegas.inventario;

export const BodegaComponent = () => {

    const [subMenuBodega, setSubMenuBodega] = useState(subMenuBodegaInit); 

    // make wrapper function to give child
    const wrapperSetSubMenuBodega = useCallback(val => {
        setSubMenuBodega(val);
    }, [setSubMenuBodega]);


    return (
        <div>
            {(subMenuBodega === subMenuBodegas.inventario) ? <InventarioComponent parentStateSetter={wrapperSetSubMenuBodega}/> : ""}
            {(subMenuBodega === subMenuBodegas.ventaOnline) ? <VentaOnlineComponent parentStateSetter={wrapperSetSubMenuBodega}/> : ""}
            {(subMenuBodega === subMenuBodegas.subMenuIngresoOC) ? <SmIngresoOc parentStateSetter={wrapperSetSubMenuBodega}/> : ""}
            {(subMenuBodega === subMenuBodegas.subAjusteInventario) ? <SmAjusteInventario parentStateSetter={wrapperSetSubMenuBodega}/> : ""}
            {(subMenuBodega === subMenuBodegas.subDespachoASucursal) ? <SmDespachoSuc parentStateSetter={wrapperSetSubMenuBodega}/> : ""}
            {(subMenuBodega === subMenuBodegas.sumMlImprink) ? <SmMlImp parentStateSetter={wrapperSetSubMenuBodega}/> : ""}
            {(subMenuBodega === subMenuBodegas.sumMlBerny) ? <SmMlBerny parentStateSetter={wrapperSetSubMenuBodega}/> : ""}
            {(subMenuBodega === subMenuBodegas.sumPagina) ? <SmPagina parentStateSetter={wrapperSetSubMenuBodega}/> : ""}
        </div>
    )
}
