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
                        class="social-widget__icon"
                />
                </a>
                <a
                    href="https://www.facebook.com/bkkozara/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        src="/images/socialIcons/facebook.png"
                        alt="facebook"
                        class="social-widget__icon"
                />
                </a>
                <a
                    href="https://www.youtube.com/channel/UCgKDEzxH3aQiee7ESXal9Sw"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img 
                        src="/images/socialIcons/youtube.png"
                        alt="youtube"
                        class="social-widget__icon"
                    />
                </a>
            </div>
            <p className="footer__disc">&copy; BK-kozara || { new Date().getFullYear() }</p>
        </footer>
    )
}

export default Footer;