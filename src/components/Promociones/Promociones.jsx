import Carousel from 'react-bootstrap/Carousel';

function Promos() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="../src/assets/promo1.jpg"
          alt="Promo 1"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="../src/assets/promo2.jpg"
          alt="Promo 2"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/promo3.jpg"
          alt="Promo 3"
        />
     
      </Carousel.Item>
    </Carousel>
  );
}

export default Promos;