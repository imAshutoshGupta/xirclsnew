import './App.css';
import Container from 'react-bootstrap/Container';
import Navbarx from './components/Navbar';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Mainpage from './components/Mainpage';
import Colourpage from './components/Colourpage';
import CarouselComponent from './components/Carousel';
import Product from './components/Product';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <CarouselComponent/>
          <Product/>
          <Contact/>
          <Footer/>
        </div>
      </Container>
    </>
  );
}

export default App;
