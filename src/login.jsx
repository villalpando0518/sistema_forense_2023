import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);

    const handleKeepLoggedInChange = () => {
        setKeepLoggedIn(!keepLoggedIn); // Cambia el estado de "Mantener Conectado"
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe); // Cambia el estado de "Recuérdame"
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="contenedor">
            <div class="marco">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSF5wGUifYZWo8jlnBGY8hNx0wpxB8k3kYqR1IywDpA&s" alt="imagen del usuario" className="usuario-imagen"></img>
                <p>Iniciar sesion con</p>
                <img className="logo-google" src="https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png" alt="logo de google"></img>
                <div class="horizontal-line">
                    <div class="line"></div>
                    <p>o</p>
                    <div class="line"></div>
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="Correo electronico" placeholder="EMAIL/ Nombre de usuario" id="correo" name="correo" className="datos" />
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Contraseña" id="contraseña" name="contraseña" className="datos" />
                    <div className="acuerdate-de-mi">
                        <input className="check-login" type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
                        <label className="texto-acuerdate" htmlFor="rememberMe">Acuérdate de mí</label>
                        <a className="olvide-contraseña" href="google.com">Olvidé mí contraseña</a>
                    </div>

                </form>
                <button className="log-btn" type="submit" onClick={() => props.onFormSwitch('main')}> <strong>LOGIN</strong></button>
                <div className="keep-logged-in">
                    <input
                        type="checkbox"
                        id="keepLoggedIn"
                        checked={keepLoggedIn}
                        onChange={handleKeepLoggedInChange}
                    />
                    <label class="mantener-conectado" htmlFor="keepLoggedIn">Mantener Conectado</label>
                </div>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>¿Aún no te has registrado? Registrate ahora</button>
            </div>
        </div>
    )
}