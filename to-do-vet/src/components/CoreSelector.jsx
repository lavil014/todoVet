import { useState } from 'react';
import data from '../data/data.json';
import { useToGrade } from '../hooks/usetoGrade';

const CoreSelector = () => {

  const { coreVariables, setCoreVariables, getTotal, descripcion, setDescripcion } = useToGrade();

  const [valorSeleccionado, setValorSeleccionado] = useState({});

  const handleChange = (e) => {

    const { name , value, textContent} = e.target;

    const selectedOption = e.target.options[e.target.selectedIndex].textContent;

    setDescripcion(selectedOption)


    console.log(value)

  }

  


  return (
    <div>
      {
        coreVariables.map((variable)=>{

          const{id, nombre,niveles} = variable


          return(
            <div key={id}>
              <h3>{nombre}</h3>

              <select name={`core_${id}`} value={valorSeleccionado[`core_${id}`] ?? ''} onChange={handleChange} >
                
               
              
                <option value="">{descripcion}</option>

                {
                  niveles.map((nivel, index)=>{

                    const {puntaje, descripcion} = nivel

                    return(
                      <option key={index} value={puntaje}>{descripcion}</option>
                    )
                  })
                }

               

              </select>
            

              
            </div>
            
          )
        })
      }
    </div>
  )
};

export default CoreSelector;
