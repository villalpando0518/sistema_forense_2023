import './App.css';
import './paginaPrincipal.css'
import React, { useEffect, useState } from 'react';
import MyDataTable from './MyDataTable';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from "./aws-exports";
import { Auth } from 'aws-amplify';

Amplify.configure(awsExports);

function App({ signOut }) {
  const [contenido, setContenido] = useState(null);
  const [user, setUser] = useState(null);
  const [seleccion, setSeleccion] = useState('');
  const [cargando, setCargando] = useState(false);



  async function cargarContenido() {
    try {
      setCargando(true)
      // Llamada a la función Lambda 
      const response = await fetch('https://pabuxkgkph.execute-api.us-west-2.amazonaws.com/default/myFunction');
      const contenidoDesdeLambda = await response.json(); // Parsea la respuesta como JSON

      setContenido(contenidoDesdeLambda);
    } catch (error) {
      console.error('Error al cargar el contenido desde Lambda:', error);
    } finally {
      setCargando(false);
    }
  }

  const manejarCambioSelect = (e) => {
    setSeleccion(e.target.value);
  };

  const manejarClicBoton = () => {
    if (seleccion) {
      cargarContenido();
    }
  };
  useEffect(() => {
    async function fetchAuthenticatedUser() {
      const userInfo = await Auth.currentAuthenticatedUser();
      setUser(userInfo.attributes);
    }
    fetchAuthenticatedUser();
  },
    []);
  return (
    <><div className="pagina-principal">
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
        <label className="boton-agregar-excel">
          INGRESAR EXCEL
          <input className="input-oculto" type="file" id="solicitud" name="solicitud" accept=".xlsx"></input>
        </label>
        <input className="input-oculto" type="file" id="archivoInput" accept=".xlsx, .xls" />
        <select className="seleccion-algoritmos" id="opciones" value={seleccion} onChange={manejarCambioSelect} >
          <option>SELECCIONAR ALGORITMO</option>
          <option value="opcion1">ALGORITMO K-NN</option>
          <option value="opcion2">ALGORITMO 2</option>
          <option value="opcion3">ALGORITMO 3</option>
          <option value="opcion4">ALGORITMO 4</option>
          <option value="opcion5">ALGORITMO 5</option>
        </select>
        <a className="boton-ejemplo-excel" href="https://docs.google.com/spreadsheets/d/1GHcyG5LYAtANLW6Y2ca2wgSkWsPpuPOI/export?format=xlsx" download="formato-excel.xlsx">
          EJEMPLO DE EXCEL
        </a>
        <button className="comenzar-algoritmo" id="iniciar" onClick={manejarClicBoton} disabled={!seleccion || cargando}>INICIA</button>
      </div>
      <div className="mostrar-resultado" id='salida'>
        {cargando ? (<div>Cargando...</div>) : contenido && contenido.X ? (<MyDataTable data={contenido.X} />) : null}
      </div>
      <div className="botones-inferior">
        <a className="boton-descargar-bot" href="ruta_del_archivo/archivo.zip" download="nombre_del_archivo.zip">
          DESCARGAR ARCHIVO EXCEL
        </a>
        <button className="historial">VER HISTORIAL</button>
      </div>
    </div>
    </>
  );
}

export default withAuthenticator(App);


// prueba de commit