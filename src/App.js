import './App.css';
import MyNavbar from './MyNavbar';
import { Container } from 'react-bootstrap';
import MatrixBackground from './Components/MatrixBackground';
import Footer from './Components/Footer';
import { useMedia } from 'react-use';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    // Use the useMedia hook to check if the user has set their device to use a dark color scheme
    const isDarkMode = useMedia('(prefers-color-scheme: dark)');
    const style = isDarkMode ? "dark-style" : "light-style";
  return (
    <div className={style} >
      <MyNavbar />
      <Footer className="footer--pin"/>
      <Container  >
        <MatrixBackground timeout={100} />
      </Container>
      
    </div>
  );
}

export default App;
