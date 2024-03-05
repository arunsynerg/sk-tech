import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from 'react-scroll';
import './Nav.css'
import { useState } from "react";
function Nav(){

    const [screen, setScreen] = useState(false);
    const clickeve = ()=>{
        return (setScreen((screen ? false : true)))
    }
    return(
        <>
        <div className="nav-container">
            <div>
                SK-tech
            </div>
            <div className='nav-items-con'>
                <ul className='nav-items'>
                    <Link to='home' smooth={true} duration={1000} ><li>Home</li></Link>
                    <Link to='about' smooth={true} duration={1000} ><li>About Us</li></Link>
                    <Link to='service' smooth={true} duration={1000} ><li>Services</li></Link>
                    <li>Our Projects</li>
                    <Link to='contact' smooth={true} duration={1000} ><li>Contact Us</li></Link>
                    <li>Technical Support</li>
                </ul>
                <HiMenuAlt2 className="menubtn" onClick={clickeve}/>
            </div>
            

        </div>
        <div className='nav-mob'>
       
            <div className="mob-navitems" style={{display : screen ? 'block' : 'none'}}>
            <ul className='nav-items-sm'>
                <Link to='home' smooth={true} duration={1000} ><li>Home</li></Link>
                <Link to='about' smooth={true} duration={1000} ><li>About Us</li></Link>
                <Link to='service' smooth={true} duration={1000} ><li>Services</li></Link>
                <li>Our Projects</li>
                <Link to='contact' smooth={true} duration={1000} ><li>Contact Us</li></Link>
                <li>Technical Support</li>
            </ul>
            </div>
        </div>
        </>
    )
}
export default Nav;
