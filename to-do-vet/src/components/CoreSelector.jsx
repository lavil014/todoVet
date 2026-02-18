import { useState } from 'react';
import data from '../data/data.json';
import { useToGrade } from '../hooks/usetoGrade';

const CoreSelector = () => {

  const { coreVariables, setCoreVariables, getTotal } = useToGrade();

  const [value, setValue] = useState(0)


  const handleChange = (e)=>{

    const {text} = e.target;

    console.log(text)
  }


  return (
    <div>
      {
        coreVariables.core_variables.map((variable)=>{

          const{id, nombre,niveles} = variable

          


          return(
            <div key={id}>
              <h3>{nombre}</h3>

              <select >
                
                {niveles.map((coreNivel)=>{

                  const {descripcion, nivel, puntaje} = coreNivel

                  return(
                    <option value={puntaje}>{descripcion}</option>  
                  )
                })}

              </select>
            

              
            </div>
            
          )
        })
      }
    </div>
  )
};

export default CoreSelector;
