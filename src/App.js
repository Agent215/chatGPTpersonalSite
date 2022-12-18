import './App.css';
import MyNavbar from './MyNavbar';
import { Container } from 'react-bootstrap';
import MatrixBackground from './Components/MatrixBackground';
import ImageCarousel from './Components/ImageCarousel';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Container  >
        <MatrixBackground />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
