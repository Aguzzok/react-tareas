import React from "react";
import '../styles/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className="tarea-text"
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
      className="tarea-contenedor-icons"
      onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className="tarea-icon"/>
      </div>
    </div>
  );
}

export default Tarea;