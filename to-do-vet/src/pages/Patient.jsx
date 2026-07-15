import EvaluacionClinica from '../components/EvaluacionClinica'
import Diagnostico from '../components/Diagnostico'

import '../stylesheets/Patient.css'


const Patient = () => {
  return (
    <main className='main-container'>
      <EvaluacionClinica/>
      <Diagnostico/>
    </main>
  )
}

export default Patient
