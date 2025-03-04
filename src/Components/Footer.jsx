import React from 'react';
import { FaSquareFacebook, FaLinkedin, FaSquareInstagram, FaSquareXTwitter, FaSquareWhatsapp } from "react-icons/fa6";
import { Row, Col} from 'react-bootstrap';
const Footer = () => {
  return (
    <>
      <div className='container-fluid bg-black py-4 footerBox mt-5' >
        <div className='my-3'>
          <FaSquareFacebook className='fbIcon'/>
          <FaLinkedin className='lInIcon' />
          <FaSquareInstagram className='igIcon' />
          <FaSquareXTwitter className='xIcon' />
          <FaSquareWhatsapp className='waIcon' />
        </div>
        <div>
          <h5 className='footerText'>Resume Project by Munish Singhal | Email: gupta.munish2k@gmail.com</h5>
        </div>
      </div>
    </>
  )
}

export default Footer