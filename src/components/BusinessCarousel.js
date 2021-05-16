import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

class BusinessCarousel extends React.Component {
  render() {
    const business = this.props.business;
    return (
      <>
        {business.photos ?
          <Container>
            <Carousel>
              {business.photos.map((photo, i) =>
                <Carousel.Item key={i}>
                  <img
                    className="d-block w-100"
                    src={photo}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Place holder</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )}
            </Carousel>
          </Container>
          :
          ''
        }
      </>
    )
  }
}

export default BusinessCarousel;