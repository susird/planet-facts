import React, { useState} from 'react';
import './styles.css';
import  Links  from '../Links';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

function HamBox () {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = 
    <FiMenu 
    className="fi-menu" 
    onClick={() => setOpen(!open)} />
  const closeIcon = 
    <AiOutlineClose 
    className="close-icon" 
    onClick={() => setOpen(!open)} />
  return (
    <div className="ham-box">
      {open ? closeIcon : hamburgerIcon}
      {open && <Links />}
    </div>
  )
}

export default HamBox;