import './App.css';
import Container from 'react-bootstrap/Container';
import Navbarx from './components/Navbar';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <>
      <Container fluid>
        <div className=''>
          <Navbarx/>
          <Hero/>
          <Hero2/>
          <Mainpage/>
        </div>
      </Container>
    </>
  );
}

export default App;
