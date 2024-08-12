import './App.css';
import Container from 'react-bootstrap/Container';
import Navbarx from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Container fluid>
        <div className=''>
          <Navbarx/>
          <Hero/>
        </div>
      </Container>
    </>
  );
}

export default App;
