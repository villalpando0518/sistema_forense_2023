export const Main = () => {
    return (
        <div className="main">
            <div className="cabecera">
                <img className="logo" src="https://geekflare.com/wp-content/uploads/2021/09/520401-pure-black-background-wallpaper.jpg"></img>
                <div><h2 className="titulo-main">ESTIMACION DE LA EDAD AUTOMATICA A PARTIR DE SINFISIS PUBICA, ESTERNON Y HUESOS DE LA CARA</h2></div>
                <div className="cabecera-usuario">
                    <h2 className="usuario">NOMBRE DE USUARIO</h2>
                    <button className="boton-cabecera">SALIR</button>
                </div>
            </div>
            <div className="botones-top">
                <label for="archivoInput" class="boton-examinar">
                    INGRESAR EXCEL
                </label>
                <input type="file" id="archivoInput" class="input-oculto" accept=".xlsx, .xls" />
                <select id="opciones" className="opciones">
                    <option value="opcion1">ALGORITMO 1</option>
                    <option value="opcion2">ALGORITMO 2</option>
                    <option value="opcion3">ALGORITMO 3</option>
                    <option value="opcion4">ALGORITMO 4</option>
                    <option value="opcion5">ALGORITMO 5</option>
                </select>
                <a href="ruta_del_archivo/archivo.zip" download="nombre_del_archivo.zip" class="boton-descargar">EJEMPLO DE EXCEL</a>
                <button className="iniciar">INICIA</button>
            </div>

            <div className="salida"></div>
            <div className="botones-bot">
                <button className="guardar-resultado">GUARDAR RESULTADO</button>
                <a href="ruta_del_archivo/archivo.zip" download="nombre_del_archivo.zip" class="boton-descargar-bot">DESCARGAR ARCHIVO EXCEL</a>
                <button className="historial">VER HISTORIAL</button>
            </div>
        </div>
    )
}