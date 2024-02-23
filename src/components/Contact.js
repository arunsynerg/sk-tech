import './Contact.css'
import contactimg from '../Assets/contact.svg'
function Contact(){

    return(
        <div className="contact">
            <div className='contact-left'>
                <form></form>                
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