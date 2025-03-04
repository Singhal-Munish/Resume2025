import React from "react";
import { Button, Row, Col, Card, Accordion } from "react-bootstrap";
import { qualDetails } from "../assets/Assets";
import { TbCalendarTime } from "react-icons/tb";

const Qualification = () => {
  return (
    <>
      <div className="container-sm mt-5">
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header><h4 className='journeyHeading'>professional/ educational qualification</h4></Accordion.Header>
            <Accordion.Body>
            <Row>
              {
                qualDetails.map((qual)=> {
                  return (
                      <Col sm={12} md={6} lg={4} key={qual.id} >
                        <Card className="my-4 container-sm g-0 qualCard" >
                          <Card.Img variant="top" src={qual.image} className="qualImage"/>
                          <Card.Body>
                            <Card.Title><TbCalendarTime style={{color: 'red'}}/>&nbsp;&nbsp;&nbsp;{qual.year}</Card.Title>
                            <div>Duration: {qual.duration}</div>
                            <div>University: {qual.universityName}</div>
                            <div>Location: {qual.location}</div>
                            <div>Degree: {qual.degree}</div>
                            {/* <Card.Text></Card.Text>
                            <Card.Text></Card.Text> */}
                            <div className='buttonPos'>
                                <Button variant="primary" style={{borderRadius: '20px'}}>
                                    View Certificate
                                </Button>
                            </div>                         
                          </Card.Body>
                        </Card>
                      </Col>
                  )
                })
              }
            </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default Qualification;
