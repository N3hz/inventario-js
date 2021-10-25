import React from 'react'
import {
    useHistory,
} from "react-router-dom";
import icono from '../../assets/img/iconoCarga.png';

export const LoginPage = () => {

    const history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();
        history.replace("/inicio");
    }

    return (
        <div className="fondoblue">
            <div className="login">
                <img src={icono} alt="iconoCarga" style={{width:50,height:50}} className="centerImg"/>
                <h3>DGBox</h3>
                <form method="post" onSubmit={handleLogin}>
                    <input type="text" className="inputLG" name="u" placeholder="Username" />
                    <input type="password" className="inputLG" name="p" placeholder="Password" />
                    <button type="submit" className="btn btn-primary btn-block btn-large">Login</button>
                </form>
            </div>
        </div>
    )
}
