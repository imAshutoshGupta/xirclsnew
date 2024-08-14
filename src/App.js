import './App.css';
import Container from 'react-bootstrap/Container';
import Navbarx from './components/Navbar';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Mainpage from './components/Mainpage';
import Colourpage from './components/Colourpage';
import ResponsiveCarousel from './components/Carousel';
import Product from './components/Product';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Container fluid>
        <div className=''>
          <Navbarx/>
          <Hero/>
          <Hero2/>
          <Mainpage/>
          <Colourpage/>
          <ResponsiveCarousel/>
          <Product/>
          <Contact/>
          <Footer/>
        </div>
      </Container>
    </>
  );
}

export default App;
