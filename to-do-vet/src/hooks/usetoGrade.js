import { useState } from 'react';
import data from '../data/data.json';


export const useToGrade = () => {

    const { core_variables } = data;

    
    const puntajeMaximo = 10;

    const getTotal = (selectedScore)=>{
        puntajeMaximo + selectedScore

        console.log(puntajeMaximo)
    }

    const [coreVariables, setCoreVariables] = useState({core_variables});

    return { coreVariables, setCoreVariables, getTotal };
}