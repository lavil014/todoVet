import { useState } from 'react'


import enfermedades from '../data/enfermedades.json'

const Dianostico = () => {

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

  /* 
  const possiblesDiagnosticos = patologias.sintomas.filter((patologia)=>{

    return filtroparaBusqueda.has(patologia.sintomas);
  })

  */

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

  console.log(possiblesDiagnosticos)


  return (
    <div>

    <h3>Ingrese la sintomatologia del paciente</h3>

      <form typeof='submit' onSubmit={submitInformacion}>
        <textarea type='text' rows={12} cols={40} onChange={collectarSintomatologia}></textarea>

        <button type='submit'>Enviar</button>
      </form>

      <div>
        
        <div>
          {
            possiblesDiagnosticos.map((patologia)=>{

              const {enfermedad, sintomas, pruebas, tratamiento, medicamento} = patologia;

              return(
                <div>
                  <h4>Pruebas a considerar</h4>
                  <p>{pruebas}</p>
                </div>

              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Dianostico
