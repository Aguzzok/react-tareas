import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../styles/ListaTareas.css'
import Tarea from "./Tarea";


function ListaDeTareas(){

    const[tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        console.log("Tarea agregada");
        console.log(tarea);
    }

    return(
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                    <Tarea 
                        Texto={tarea.texto}
                        completada={tarea.completada}

                    />

                    )
                }
                
            </div>
        </>
    );
}


export default ListaDeTareas;