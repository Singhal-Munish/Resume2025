import React from 'react';
import { Row, Col, Button, ProgressBar, Accordion } from 'react-bootstrap';
import { AutomationSkillDetails, DesigningSkillDetails, itSkillDetails, skillAccordion } from '../assets/Assets';

const Skills = () => {
    
    const ITSkills = () => {
        return (
            itSkillDetails.map((itSkills)=>{
                return(
                    <div key={ itSkills.id } id='itskills' className='mx-4'>
                        <h5 style={{display: 'inline'}} >{ itSkills.heading }</h5>
                        <p style={{display: 'inline'}}>{ itSkills.details }</p>
                        <ProgressBar variant= { itSkills.variant } now= { itSkills.skillLevel } label= { itSkills.label } className='progBar mt-2' />
                    </div>
                );
            })
        );
    }

    const DesigningSkills = () => {
        return (
            DesigningSkillDetails.map((designSkills)=>{
                return (
                    <div key={ designSkills.id } id='designskills' className='mx-4'>
                        <h5 style={{display: 'inline'}} >{ designSkills.heading }</h5>
                        <p style={{display: 'inline'}}>{ designSkills.details }</p>
                        <ProgressBar variant= { designSkills.variant } now= { designSkills.skillLevel } label= { designSkills.label } className='progBar mt-2' />
                    </div>
                );
            })
        );    
    }
    
    const AutomationSkills = () => {
        return (
            AutomationSkillDetails.map((automationSkills)=>{
                return (
                    <div key={ automationSkills.id } id='automationskills' className='mx-4'>
                        <h5 style={{display: 'inline'}}>{ automationSkills.heading }</h5>
                        <p style={{display: 'inline'}}>{ automationSkills.details }</p>
                        <ProgressBar variant= { automationSkills.variant } now= { automationSkills.skillLevel } label= { automationSkills.label } className='progBar mt-2' />
                    </div>
                );
            })
        );
    }

    const TransferrableSkills = () => {
        return (
                <ul id='transferskills' className='mx-4 transferSkills'>
                    <li>Problem Solving</li> 
                    <li>General Management</li>
                    <li>Communication Skills</li> 
                    <li>Attention to Details</li>
                    <li>Project Management</li>
                    <li>Team Work</li>
                </ul>
        );
    }
    
    return (
        <div className="container-sm mt-5">
            <Row className='skillsHeading'>
                <Col xs={6} sm={6} md={3}><Button className='skillsButton' style={{backgroundColor: 'red'}} href='#itskills'>IT Skills</Button></Col>
                <Col xs={6} sm={6} md={3}><Button className='skillsButton' style={{backgroundColor: 'green'}} href='#designskills'>Designing Skills</Button></Col>
                <Col xs={6} sm={6} md={3}><Button className='skillsButton' style={{backgroundColor: 'indigo'}} href='#automationskills'>Automation Skills</Button></Col>
                <Col xs={6} sm={6} md={3}><Button className='skillsButton' style={{backgroundColor: 'blue'}} href='#transferskills'>Transferable Skills</Button></Col>
            </Row>
                {
                    skillAccordion.map((accord)=>{
                        return (
                            <Accordion key={accord.id} defaultActiveKey={['0']} alwaysOpen className='mb-4'>
                                <Accordion.Item eventKey="0" >
                                    <Accordion.Header >
                                        <h4 className='journeyHeading'>{accord.heading}</h4>
                                    </Accordion.Header>
                                    <Accordion.Body className='container'>
                                        {
                                            accord.heading == 'Designing Skills'? <DesigningSkills />
                                            : accord.heading == 'Automation Skills'? <AutomationSkills />
                                            : accord.heading == 'Transferable Skills'? <TransferrableSkills />
                                            : <ITSkills />
                                        }
                                        <div style={{textAlign: 'right', fontSize: '2.1vh'}} >
                                            Last Updated: {accord.lastUpdated}
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    })
                }                
        </div>
    );
}    

export default Skills