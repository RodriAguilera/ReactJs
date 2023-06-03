import Carousel from 'react-bootstrap/Carousel';


function IndividualIntervalsExample({item}) {
  return (
    <Carousel>
      <Carousel.Item interval={1000} style={{ height: '550px' }}>
        <img
          className="d-block w-100"
          src='../src/assets/labialesInicio.webp'
          alt="promo"
        />
     
      </Carousel.Item>
      <Carousel.Item interval={500}  style={{ height: '550px' }}>
        <img
          className="d-block w-100"
          src='../src/assets/carteraInicio.webp'
          alt="promo"
        />
      
      </Carousel.Item>
      <Carousel.Item  style={{ height: '550px' }}>
        <img
          className="d-block w-100"
          src='../src/assets/apliquesInicio.webp'
          alt="promo"
        />
      
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;