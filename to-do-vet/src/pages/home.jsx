import CoreSelector from '../components/CoreSelector';
import DiseaseList from '../components/DiseaseList';
import ScoreBar from '../components/ScoreBar';

const Home = () => { 
    return (
      <main>
        <CoreSelector />
        <DiseaseList />
        <ScoreBar />  
      </main>
    )
}

export default Home;