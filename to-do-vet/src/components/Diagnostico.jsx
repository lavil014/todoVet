import { useState } from 'react'
import EvaluacionClinica from './EvaluacionClinica'  


import enfermedades from '../data/enfermedades.json'

import '../stylesheets/diagnostico.css'

const Diagnostico = () => {

  const [patologias, setPatologias] = useState(enfermedades.patologias_dermatologicas_mascotas)

  const [sintomatologia, setSintomatologia ] = useState([])


  const collectarSintomatologia = (e)=>{

    let sintomatologiaDemiPaciente = e.target.value;

    const arreglodeSintomas = sintomatologiaDemiPaciente
    .split(/,|\s{2,}|\n/)
    .map(item => item.trim())
    .filter(item => item !== "");

    setSintomatologia(arreglodeSintomas)  

    console.log(arreglodeSintomas.length)
  }

  const filtroparaBusqueda = new Set(sintomatologia);

  const submitInformacion = (e)=>{

    e.preventDefault()

  }

  const possiblesDiagnosticos = patologias.filter(patologia => {

    if(!patologia.sintomas) return false

    return sintomatologia.some(busqueda => {

      const busquedaLower = busqueda.toLowerCase().trim();

      return patologia.sintomas.some(sintoma => sintoma.includes(busquedaLower))

    })

  })



  return (
    <main className='diagnostico-container'>

      <h3>Sintomatologia</h3>

      <form typeof='submit' onSubmit={submitInformacion}>
        <textarea type='text' onChange={collectarSintomatologia} 
        cols="40"
        onClick={(e)=>{
          e.target.rows = 10
        }}></textarea>
      <div className='btn-container'>
        <button type='submit' style={{display:sintomatologia.length > 0 ? 'flex': 'none'}}>Guardar</button><button className='cancelar-btn' style={{display:sintomatologia.length > 0 ? 'flex': 'none'}}>Cancelar</button>
      </div>
      </form>

      <div>
        
        <section>

          <h4 style={{display: possiblesDiagnosticos.length > 0 ? 'flex' : 'none'}}>Diagnosticos a considerar</h4>

          <div className="possibles-diagnosticos-container">

          
          {
            possiblesDiagnosticos.map((patologia)=>{

              const {enfermedad} = patologia;

              return(    
                  <div >
                    <p>{enfermedad}</p>
                  </div>
                                                         
              )
            })
          }

          </div>
        </section>

        <section >
          <h4 style={{display: possiblesDiagnosticos.length > 0 ? 'flex' : 'none'}}>Possibles pruebas diagnosticas</h4>
          <div className="possibles-diagnosticos-container"> 
          
          /* Necesito actualiza el className para que no me aparezca cuando no hayan sintomas */
            
            {
              possiblesDiagnosticos.map((patologia)=>{

                  const {pruebas} = patologia;

                return(
                  <div>
                    <p>{pruebas}</p>
                  </div>
                )
              })
            }
          </div>
        </section>

      </div>

      
    </main>
  )
}

export default Diagnostico
