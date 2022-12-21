import './App.css';
import MyNavbar from './MyNavbar';
import { Container } from 'react-bootstrap';
import MatrixBackground from './Components/MatrixBackground';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Footer className="footer--pin"/>
      <Container  >
        <MatrixBackground />
      </Container>
      
    </div>
  );
}

export default App;
