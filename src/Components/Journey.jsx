import React from 'react';
import { Accordion } from 'react-bootstrap';
import { images } from '../assets/Assets';

const Journey = () => {
  return (
    <>
        <div className='container-sm mt-5'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 className='journeyHeading'>career journey at a glance</h4></Accordion.Header>
                    <Accordion.Body className=' journeyBg' >
                        <img src={ images.journeyImage } className="careerImage" />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    </>
  )
}

export default Journey