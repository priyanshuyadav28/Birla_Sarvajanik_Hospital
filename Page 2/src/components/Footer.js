import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            {/* <p>© 2021</p> */}
            <div className='footer-container'>
                <div className='footer-left'>
                    <div>Privacy Policy |</div>
                    <div>Disclamer |</div>
                    <div>Contact |</div>
                    <div>Sitemap</div>
                </div>

                <div className='footer-right'>
                    <div>© 2022 Birla sarvajanik Hospital. All Rights Reserved.
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;