import './App.css';
import Container from 'react-bootstrap/Container';
import Navbarx from './components/Navbar';

function App() {
  return (
    <>
      <Container fluid>
        <div className='bg-warning'>
          <Navbarx/>
        </div>
      </Container>
    </>
  );
}

export default App;
