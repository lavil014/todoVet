import { useState } from 'react';
import data from '../data/data.json';


export const useToGrade = () => {

    const { core_variables } = data;
    const [puntajeTotal, setPuntajeTotal] = useState(0);
    const [descripcion, setDescripcion] = useState('Selecciona un valor');

    
    const puntajeMaximo = 10;

    const getTotal = (selectedScore)=>{
      puntajeMaximo + selectedScore

      console.log(puntajeMaximo)
    }

    const [coreVariables, setCoreVariables] = useState(core_variables);

    return { coreVariables, setCoreVariables, getTotal, puntajeTotal, setPuntajeTotal, descripcion, setDescripcion }
}