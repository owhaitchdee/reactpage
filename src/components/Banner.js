import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../img/UIworks.png';
import pic2 from '../img/mobiledev.png';
import pic3 from '../img/mobile.png';

function BannerCarou() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block flex w-65 mx-auto"
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h4>Mobile App Design</h4>
          <p>Expertise in designing UI/UX for mobile apps built over 20+ years of experience </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-65 mx-auto"
          src={pic2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Product Development</h3>
          <p>In-depth familiarity with end-to-end process of software development</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-65 mx-auto"
          src={pic3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>App Launch and Implementation</h3>
          <p>Various experience in app promotion, launch events and user support</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerCarou;