import './Contact.css'
import contactimg from '../Assets/contact.svg'
import { MdOutlineMail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import {useState} from 'react'
function Contact(){
 
    return(
        <div className="contact">
            <div className='contact-left'>
            <form className='form-container'>
              <h2>Submit Your Query</h2>
              <h5>We will be glad to help you</h5>
              <div className='form-group'>
                  <div className='form-input'>
                    <label ></label>
                    <input type='text' placeholder='Name' />
                  </div>
                  <div className='form-input'>
                    <label ></label>
                    <input type='text' placeholder='Your Email' />
                  </div>
              </div>
              <div className='form-group'>
                  <div className='form-input'>
                    <label ></label>
                    <input type='text' placeholder='Phone Number' />
                  </div>
                  <div className='form-input'>
                    <label ></label>
                    <input type='text' placeholder='Subject' />
                  </div>
              </div>
              <div className='form-group-message'>
                 <textarea placeholder='Message'/>
              </div>
              <button>Submit</button>
              <div className='contact-info'>
                <p><a><MdAddIcCall /> +91 9876543210</a></p>
                <p className='email-info'><a><MdOutlineMail /> email</a></p>
              </div>
        
      </form>      
      {/* <div className='contact-abs'>
              <div className='round'></div>
              <div className='round round2'></div>
              <div className='round'></div>
              <div className='round round2'></div>
              <div className='round'></div>
              <div className='round round2'></div>
              <div className='round'></div>
              <div className='round round2'></div>
              <div className='round'></div>
              <div className='round round2'></div>
              <div className='round'></div>
              <div className='round round2'></div>
              <div className='round'></div>
            </div>     */}
            </div>
            <div className='contact-right'>
                <h4>We are available 24x7 for you!</h4>
                <h2>Contact Us</h2>
                <img src={contactimg} />
            </div>
           
        </div>
    )
}
export default Contact;