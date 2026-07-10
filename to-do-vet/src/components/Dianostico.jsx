import { useState } from 'react'

import enfermedades from '../data/enfermedades.json'

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
    <div>

      <h3>Nuevo paciente</h3>

      <form typeof='submit' onSubmit={submitInformacion}>
        <textarea type='text' onChange={collectarSintomatologia} onClick={(e)=>{
          e.target.rows = 10
          e.target.cols = 40
        }}></textarea>

        <button type='submit'>Enviar</button>
      </form>

      <div>
        
        <section>

          <h4 style={{display: possiblesDiagnosticos.length > 0 ? 'flex' : 'none'}}>Diagnosticos a considerar</h4>
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
        </section>

        <section>
          <h4 style={{display: possiblesDiagnosticos.length > 0 ? 'flex' : 'none'}}>Possibles diagnosticos</h4>
          <div>
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
    </div>
  )
}

export default Diagnostico
