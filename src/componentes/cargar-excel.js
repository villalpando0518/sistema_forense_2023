import React, { useState } from "react";
import * as XLSX from "xlsx" ;
const UploadExcelFile = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  //const handleUpload = (e) => {
  const handleSubmit = async (e) => {
    e.preventDefault();  

    if (!file) {
      alert("Debes seleccionar un archivo.");
      return;
    }

    // Obtener el nombre del archivo
    const fileName = file.name;

    // Validar que el archivo sea de tipo Excel
    if (!fileName.endsWith(".xlsx")) {
      alert("El archivo debe ser de tipo Excel.");
      return;
    }

    // Guardar el archivo en S3
    // ...

    // Leer el archivo de Excel
    const workbook = XLSX.read(file);
    // Obtener la hoja de trabajo activa
    const worksheet = workbook.worksheets[0];
    // Obtener las primeras 4 filas y 4 columnas
    const data = worksheet.getRows(1, 5);

    // Mostrar el contenido de la hoja de trabajo en el iframe
    const iframe = document.getElementById("excel-iframe");
    iframe.srcdoc = data.html();
  };

  return (
    <div>
      <input type="file" name="file" onChange={handleUpload} />
      <button onClick={handleSubmit}>Cargar</button>
    </div>
  );
};

export default UploadExcelFile;