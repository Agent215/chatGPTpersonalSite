import './App.css';
import MyNavbar from './MyNavbar';
import { Container } from 'react-bootstrap';
import MatrixBackground from './MatrixBackground';
import ImageCarousel from './ImageCarousel';
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Container  >
        <MatrixBackground />
      </Container>
    </div>
  );
}

export default App;
