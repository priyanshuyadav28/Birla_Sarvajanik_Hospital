import './Navbar.css';
import logo from './assets/Rectangle 79.jpg';

function Navbar() {  
    return(
        <div className='navbar'>
            <div className='content'>
                <div className='menu'>HOME</div>
                <div className='menu'>SPECIALITIES</div>
                <div className='menu'>PATIENT SERVICES</div>
                <div className='menu'>HEALTHCARE EXPERTS</div>
                <div className='menu'>FACILITIES</div>
                <div className='menu'>INTERNATIONAL PATIENTS</div>
                <div className='menu-blog'>BLOG</div>
            </div>

            <img className='img' src={logo}></img>
        </div>
    );
}

export default Navbar;