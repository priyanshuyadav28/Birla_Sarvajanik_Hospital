import './ContactUs.css';
import fb from './assets/fb-img.png';
import insta from './assets/insta-img.png';
import linkedin from './assets/linkedin-img.png';

import footerFb from './assets/fb-footer.png'
import footerInsta from './assets/insta-footer.png'
import footerLn from './assets/linkedin-footer.png'

import emailImg from './assets/email-img.png';
function ContactUs() {
  return (
        <div className="contact-us-form">
            <div className='helper'>

            <div className='hosp-name'>
                <div>BIRLA</div>
                <div>SARVAJANIK</div>
            </div>
            
            <div className='all-content'>

            <div className='important-links-section'>
                <div className='three-headings'>Important Links</div>   

                <div className='links'>
                    <div>Appointment</div>
                    <div>Doctors</div>
                    <div>Services</div>
                    <div>About Us</div>
                </div>

            </div>

            <div className='contact-us-section'>
                <div className='three-headings'>Contact Us</div>
            
                <div className='links'>
                    <div className='ph-no'>
                        <span>call: </span>
                        <span>+9100000000</span>
                    </div>

                    <div className='email'>
                        <span>Email: </span>
                        <span>Birla@gmail.com</span>
                    </div>

                    <div className='address'>
                        <span>Address: </span>
                        <span>0123 Some Place</span>
                        <div>India</div>
                    </div>

                </div>
            </div> 

            <div className='newsletter-section'>
                <div className='three-headings'>Newsletter</div>

                <div className='email-btn'>
                    <input className='input' type='text' placeholder='Enter your email address'></input>
                    <img className='email-img' src={emailImg}></img>
                </div>
            </div>
        </div>  
             
        </div>
        <div className='horizontal-line'></div>
        <div className='footer'>
            <div>
            © 2021 Hospital’s name All Rights Reserved by
            </div>
            <div className='social-media'>
                <img className='footer-images' src={footerLn}></img>
                <img className='footer-images' src={footerFb}></img>
                <img className='footer-images' src={footerInsta}></img>

            </div>
        </div>
        </div>
  );
}

export default ContactUs;