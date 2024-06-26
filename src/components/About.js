import aboutimg from '../Assets/about.svg'
import './About.css'
import { PiCaretUpBold } from "react-icons/pi";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from 'react-scroll';
import { useState } from 'react';
function About(){

    const [show, setShow] = useState(false);
    const showtopbtn = ()=>{
        if(window.scrollY >= 300){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }
    window.addEventListener('scroll', showtopbtn)
    return(
        <div className='about'>
            <div className='about-img'>
                <img src={aboutimg}/>
            </div>
            <div className='about-data'>
                <h4>Define Us!</h4>
                <h1>Welcome to Flown Developer - A Top Web Development Company in India</h1>
                <p>100% Trusted and Registered Company in India with a professional website that provides the best web development and web design services in India. We are a company that offers multi-functional web portals, and we make sure that a well-developed and attractive website can help our clients to record ROI-driven results.</p>
            </div>
            <Link to='home' smooth={true} duration={500} offset={-100}> <div className={show ? 'top-navigate-btn' : 'non-active'}>
                <p><PiCaretUpBold /></p>
            </div></Link>
            <div className='whatsapp-btn'>
            <a href='https://api.whatsapp.com/send?phone=6374455269' target='_blank'><FaSquareWhatsapp className='whatsapp-logo'/></a>
            <p className='tooltip'>Chat With Us</p>
            </div>

        </div>
    )
}
export default About;