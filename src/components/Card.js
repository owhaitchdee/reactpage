import Card from 'react-bootstrap/Card';

function Kard(card) {
    return(
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-md-inline-flex d-sm-block d-lg-inline-flex mt-5 justify-content-center">
          <center>
          {['Dark'].map((variant) => (
        <Card
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem', backgroundColor:'black', opacity:'95%' }}
          className="mb-2"
        >
            <Card.Img variant="top" src={card.pic} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
              {card.desc}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted"><center> <a href={card.loc} className="btn btn-primary">View more</a></center></small>
            </Card.Footer>
          </Card>
          ))}
          </center>
        </div>
        
    ); 
}

export default Kard;