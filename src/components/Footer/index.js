import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram, FaRegCopyright} from "react-icons/fa"
import {Link} from 'react-router-dom'
import { SiGmail } from "react-icons/si"

import './index.css'

const Footer = () => (
    <div className="bg-footer-container">
        <div className="footer-container">
            <ul className='footer-icons-ul'>
                <li>
                    <Link to='/' className='link'>
                        <button className='footer-icon-btn' type='button'>
                            Home
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to='/aboutme' className='link'>
                        <button className='footer-icon-btn' type='button'>
                            About
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to='/projects' className='link'>
                        <button className='footer-icon-btn' type='button'>
                            Projects
                        </button>
                    </Link>
                </li>    
            </ul>
            <p className="footer-contactme-on-heading">Contact Me</p>
            <div className="footer-social-media-icons-card">
                <Link to='https://github.com/jellaharikrishna/' target="_blank" className="link"><FaGithub className="footer-social-media-icon" /></Link>
                <Link to='https://www.linkedin.com/in/hari-krishna-jella-211067246/' target="_blank" className="link"><FaLinkedinIn className="footer-social-media-icon" /></Link>
                <Link to='https://api.whatsapp.com/send?phone=+919951355903&text=Hello,%20Hari%20Krishna!' target="_blank" className="link"><FaWhatsapp className="footer-social-media-icon" /></Link>
                <Link to='https://www.instagram.com/' target="_blank" className="link"><FaInstagram className="footer-social-media-icon" /></Link>
                <Link to='https://mail.google.com/mail/u/0/?to=jellaharikrishna2@gmail.com&fs=1&tf=cm' target="_blank" className="link"><SiGmail className="footer-social-media-icon" /></Link>
            </div>
            <p className="footer-copyrights-heading">Copyrights<FaRegCopyright className="footer-copyright-icon"/> 2025 | All Right Reserved & Developed by <Link to='https://www.linkedin.com/in/hari-krishna-jella-211067246/' target="_blank" className="footer-span-name">Hari Krishna Jella</Link> </p>
        </div>
    </div>
)

export default Footer