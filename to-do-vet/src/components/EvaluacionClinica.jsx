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

  const gradients = {
  10: "linear-gradient(to right, #4ADE80, #16A34A)",
  9: "linear-gradient(to right, #6EE7B7, #22C55E)",
  8: "linear-gradient(to right, #86EFAC, #65A30D)",
  7: "linear-gradient(to right, #D9F99D, #84CC16)",
  6: "linear-gradient(to right, #FDE047, #EAB308)",
  5: "linear-gradient(to right, #FACC15, #F59E0B)",
  4: "linear-gradient(to right, #FDBA74, #EA580C)",
  3: "linear-gradient(to right, #FB923C, #DC2626)",
  2: "linear-gradient(to right, #F87171, #B91C1C)",
  1: "linear-gradient(to right, #EF4444, #7F1D1D)",
};


  return (

    <main>

      <section className='estadoclinico-container'>
      
        <h3>Evaluacion clinica</h3>
          <div className='evaluacionclinica-container'>
            <div className="estado-clinico" style={{background: `${gradients[estadoClinico]}`}}></div>
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
