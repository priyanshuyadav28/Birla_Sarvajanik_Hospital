import './Header.css';
import fbImg from './assets/fb-img.png';
import insta from './assets/insta-img.png';
import twitter from './assets/twitter-img.png';
import linkedIn from './assets/linkedin-img.png';

function Header() {
    
    return(<div className='header'>
        <div className='left-part'>
            <a className='left-part-text'>About Us | </a>
            <a className='left-part-text'>News & Media | </a>
            <a className='left-part-text'>Academics | </a>
            <a className='left-part-text'>Careers | </a>
            <a className='left-part-text'>Contact</a>
        </div>

        <div className='right-part'>
            <span className='right-part-text'>Follow us on: </span>
            <span id='fb' className='social-icon'>
                <img src={fbImg}></img>
            </span>
            <span id='twitter' className='social-icon'>
                <img src={twitter}></img>
            </span>
            <span id='insta' className='social-icon'>
            <img src={insta}></img>
            </span>
            <span id='linkedin' className='social-icon'>
            <img src={linkedIn}></img>
            </span>
        </div>

    </div>);
}

export default Header;