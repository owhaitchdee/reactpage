import profile from '../img/profile.jpg';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function About(){
    return (
        <Container style={{
            color: 'white', textAlign: 'center', padding: '3% 10%'
          }}>
                <h3> My Profile </h3>    
                {['Dark'].map((variant) => (
                    <Card key={variant} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'} style={{ width: 'auto', backgroundColor:'black', opacity:'80%', padding:'20px 40px', }} className="mt-4">                   
                    <p className='par' style={{fontSize:'17px'}}> I am passionate about being in the business of transformation.</p>
                    <p className='par'style={{fontSize:'15px'}}>For the past 20 years, I have been with a team who help clients improve the way they operate and manage their businesses through innovative products and latest technologies. This has helped me develop my business and technical expertise in various areas: business analysis, project management, product designing and development, quality management, marketing and business development.<br/><br/>
                        The sense of fulfillment comes from knowing that the software solutions we provide have transformed our clients' businesses and helped them stay ahead of competition.<br/><br/>
                        My goal is to bring the transformation we do to greater levels by creating web-enabled businesses and changing industries in a way that challenges what others know as impossible.</p>
                        <Image src={profile} className='mx-auto d-block d-flex' style={{ width:'120px', verticalAlign:'middle', borderRadius:'50%'}}/>
                    </Card>
                              ))}
        </Container>
    )
}

export default About;