import React, { useContext } from 'react'
import { Nav, Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { expDetails } from '../assets/Assets';
import { TbCalendarTime } from "react-icons/tb";
import { expInfoContext } from './Context/AppContext';
import { TbArrowBack } from "react-icons/tb";

const MoreExperience = (id) => {
    const navigate = useNavigate();
    const value = useContext(expInfoContext);
    const expInfo = expDetails.filter(experience => experience.id == value.moreBtn);
    return (
    <div>
        <Button variant='secondary' className='backButton' onClick={() => navigate(-1)}>
            <TbArrowBack className='fs-3' /> 
        </Button>

        <div className='container'>
        {
            expInfo.map((exp)=> {
                return (
                    <div key={exp.id}>
                        <div className='moreExpDiv'>
                            <Card className="mb-1 container-md g-0 moreExpCard" >
                                <Row className="g-0">
                                    <Col lg={6}>
                                        <Card.Img src={exp.image} className="moreExpImage" />
                                    </Col>
                                    <Col lg={6} className='px-5 mt-5'>
                                        <Card.Body >
                                            <Card.Title >
                                                <div style={{display: 'flex', alignItems:'baseline', flexDirection: 'row'}}>
                                                    <TbCalendarTime className='text-danger fs-2' />                                                
                                                    <h2 style={{marginLeft: '20px'}}>{exp.year}</h2>
                                                </div>
                                            </Card.Title>
                                            <div>
                                                <h6>(Duration: {exp.duration})</h6>
                                                <h4>Company: {exp.companyName}</h4>
                                                <p></p>
                                                <h5>Location: {exp.location}</h5>
                                                <p></p>
                                                <h4>Position: {exp.position}</h4>
                                                <p></p>
                                                {
                                                    exp.companyName=='Coursera'?
                                                        <Nav.Link href={exp.verify} target='_blank' style={{display:'inline', color:'blue'}}>
                                                            Click here to Verify  Certificate Online
                                                        </Nav.Link> : <Nav.Link/>
                                                }
                                                <div className="lastUpdated">
                                                    Last updated: {exp.lastUpdated}
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                            <div className='jobProfile'>
                                <h3>Job Profile:</h3>
                                {exp.fullDetails.map((details)=>{
                                    return (
                                        <ul className='expList' key={details}>
                                            <li>{details}</li>
                                        </ul>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
          })
        }
      </div>
    </div>
  );
}

export default MoreExperience