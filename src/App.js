import './App.css';
import './paginaPrincipal.css'
import React, { useEffect, useState } from 'react';

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from "./aws-exports";
import { Auth } from 'aws-amplify';

Amplify.configure(awsExports);


function App({ signOut }) {
  const [user, setUser] = useState(null);

  const [seleccionarOpcion, setSelectedOption] = useState('');
  const [resultado, setMensaje] = useState('');
  const mostrarResultado = () => {
    switch (seleccionarOpcion) {
      case 'opcion1':
        setMensaje("Algoritmo 1 en ejecución");
        break;
      case 'opcion2':
        setMensaje("Algoritmo 2 en ejecución");
        break;
      case 'opcion3':
        setMensaje("Algoritmo 3 en ejecución");
        break;
      case 'opcion4':
        setMensaje("Algoritmo 4 en ejecución");
        break;
      case 'opcion5':
        setMensaje("Algoritmo 5 en ejecución");
        break;

      default:
        setMensaje('Ninguna opción seleccionada, seleccion un algoritmo');
        break;
    }
  };

  useEffect(() => {
    async function fetchAuthenticatedUser() {
      const userInfo = await Auth.currentAuthenticatedUser();
      setUser(userInfo.attributes);
    }
    fetchAuthenticatedUser();
  }

    , []);
  return (
    <div className="pagina-principal">
      <div className="cabecera">
        <img className="logotipo" src="https://geekflare.com/wp-content/uploads/2021/09/520401-pure-black-background-wallpaper.jpg"></img>
        <div>
          <h2 className="titulo-principal">
            ESTIMACION DE LA EDAD AUTOMATICA A PARTIR DE SINFISIS PUBICA, ESTERNON Y HUESOS DE LA CARA
          </h2>
        </div>
        <div>
          <h2>NOMBRE DE USUARIO</h2>
          <button className="boton-cerrar-sesion" onClick={signOut}>
            SALIR
          </button>
        </div>
      </div>
      <div className="botones-superior">
        <label className="boton-agregar-excel" >
          INGRESAR EXCEL
          <input className="input-oculto" type="file" id="solicitud" name="solicitud" accept=".xlsx"></input>
        </label>
        <input className="input-oculto" type="file" id="archivoInput" accept=".xlsx, .xls" />
        <select className="seleccion-algoritmos" id="opciones" onChange={(e) => setSelectedOption(e.target.value)}>
          <option>SELECCIONAR ALGORITMO</option>
          <option value="opcion1">ALGORITMO 1</option>
          <option value="opcion2">ALGORITMO 2</option>
          <option value="opcion3">ALGORITMO 3</option>
          <option value="opcion4">ALGORITMO 4</option>
          <option value="opcion5">ALGORITMO 5</option>
        </select>
        <a className="boton-ejemplo-excel" href="https://docs.google.com/spreadsheets/d/1GHcyG5LYAtANLW6Y2ca2wgSkWsPpuPOI/export?format=xlsx" download="formato-excel.xlsx">
          EJEMPLO DE EXCEL
        </a>
        <button className="comenzar-algoritmo" id="iniciar" onClick={mostrarResultado}>INICIA</button>
      </div>
      <div className="mostrar-resultado" id='salida'>{resultado}</div>
      <div className="botones-inferior">
        <button className="guardar-resultado">GUARDAR RESULTADO</button>
        <a className="boton-descargar-bot" href="ruta_del_archivo/archivo.zip" download="nombre_del_archivo.zip" >
          DESCARGAR ARCHIVO EXCEL
        </a>
        <button className="historial">VER HISTORIAL</button>
      </div>
    </div>
  );
}

export default withAuthenticator(App);


// prueba de commit