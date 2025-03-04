import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { IoIosArrowUp } from "react-icons/io";

const TopButton = () => {
  return (
    <div>
        <Nav.Link href="/">
            <Button variant="secondary" className='topButton'>
                <IoIosArrowUp />
            </Button>
        </Nav.Link>
    </div>
  )
}

export default TopButton