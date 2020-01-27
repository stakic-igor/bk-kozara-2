import React from 'react';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="social-widget">
                <a
                    href="https://www.instagram.com/bkkozara/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        src="/images/socialIcons/instagram.png"
                        alt="instagram"
                        className="social-widget__icon"
                />
                </a>
                <a
                    href="https://www.facebook.com/bkkozara/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        src="/images/socialIcons/facebook.png"
                        alt="facebook"
                        className="social-widget__icon"
                />
                </a>
                <a
                    href="https://www.youtube.com/channel/UCgKDEzxH3aQiee7ESXal9Sw"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img 
                        src="/images/socialIcons/youtube.png"
                        alt="youtube"
                        className="social-widget__icon"
                    />
                </a>
            </div>
            <img src="./images/bk-kozara-no-white.svg" alt="BK Kozara Logo" className="footer__logo" />
            <p className="footer__disc">&copy; BK-kozara || { new Date().getFullYear() }</p>
        </footer>
    )
}

export default Footer;