import { useState } from 'react'

import core_variables from '../data/variables-CORE.json'
import enfermedades from '../data/enfermedades.json'

import '../stylesheets/evaluacionClinica.css'


const EvaluacionClinica = () => {

  const [variables, setVariables] = useState(core_variables.core_variables)

  const [diagnostico, setDiagnostico] = useState(enfermedades.metadata)

  const [patologias, setPatologias] = useState(enfermedades.patologias_dermatologicas_mascotas)

  const [estadoClinico, setEstadoClinico] = useState(10)

  const getScore = (e)=>{

    const score = e.target.value;

    setEstadoClinico(estadoClinico - score)

  }

    
  return (

    <main>

      <section className='estadoclinico-container'>
      
        <h3>Evaluacion clinica</h3>
          <div className='evaluacionclinica-container'>
            <progress className='estado-clinico' value={estadoClinico} max={10} min={0}></progress>
            <span>{estadoClinico} de 10</span>
          </div>
        

      </section>

      <section className='variables-container'>
        {variables.map((variable)=>{

          const {id, nombre, niveles} = variable;


          return(
            <div key={id}>
              <h4>{nombre}</h4>
              <select onChange={getScore}>
              {
                niveles.map((nivel)=>{

                  return(
                    <option value={nivel.puntaje}>{nivel.descripcion}</option>

                  )
                })
              }
              </select>
            </div>
            
          )
        })}
      </section>  
    </main>

  )
}

export default EvaluacionClinica
