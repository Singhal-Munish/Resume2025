import React, { useState, useContext } from 'react'
import { Row, Col, Card, Button, Accordion, Nav } from "react-bootstrap";
import { expDetails } from "../assets/Assets";
import { useNavigate } from 'react-router';
import { expInfoContext } from './Context/AppContext';
import { TbCalendarTime } from "react-icons/tb";

const Experience = () => {
    let navigate = useNavigate();
    const moreExp = (url) => {
        let path = '/moreExperience';
        navigate(path);
    };

    const value = useContext(expInfoContext);
    const handleMoreClick = (e) => {
        value.moreBtn = e.target.value;
        moreExp();
    }
      
    return (
      <div className="container-sm mt-5">
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header><h4 className='journeyHeading'>experience</h4></Accordion.Header>
                <Accordion.Body>
                    {
                    expDetails.map((exp)=> {
                        return (
                            <Card className="mb-5 container-md g-0" key={exp.id}>
                            <Row className="g-0">
                                <Col md={5}>
                                    <Card.Img src={exp.image} className="expImage" />
                                </Col>
                                <Col md={7}className='ps-3'>
                                    <Card.Body>
                                        <div className="moreDetails" >
                                            <Button variant="primary" style={{borderRadius: '20px'}}value={exp.id} onClick={ handleMoreClick }>
                                                more info...
                                            </Button>
                                        </div>
                                        <Card.Title style={{display: 'flex', alignItems:'center', flexDirection: 'row'}}>
                                            <TbCalendarTime className='text-danger fs-3' />                                                
                                            <h4 style={{marginLeft: '20px'}}>{exp.year}</h4>
                                        </Card.Title>
                                            <div>Duration: {exp.duration}</div>
                                            <div>Position: {exp.position}</div>
                                            <div>Company: {exp.companyName}</div>
                                            <div>Location: {exp.location}</div>
                                            <p></p>
                                            <div>Profile: {exp.shortDetails}</div>
                                    </Card.Body>
                                </Col>
                            </Row>
                            </Card>
                        )
                    })
                    }
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>
  )
}

export default Experience