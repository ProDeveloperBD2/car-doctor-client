import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { FaDribbble, FaFacebook, FaInstagram, FaLinkedin, } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-black'>
            <footer className="footer p-8 text-white max-w-7xl mx-auto">
                <aside>
                    <Link to="/" className='-mt-5 mb-3'><img src={logo} alt="" /></Link>
                    <p>Edwin Diaz is a software and web <br />technologies engineer, a life coach <br />trainer who is also a serial .</p>
                    <div className='flex gap-3 mt-1'>
                        <FaFacebook className='bg-[#2c2c2c] text-3xl rounded-full p-1'></FaFacebook>
                        <FaDribbble className='bg-[#2c2c2c] text-3xl rounded-full p-1'></FaDribbble>
                        <FaInstagram className='bg-[#2c2c2c] text-3xl rounded-full p-1'></FaInstagram>
                        <FaLinkedin className='bg-[#2c2c2c] text-3xl rounded-full p-1'></FaLinkedin>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">About</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <header className="footer-title ">Company</header>
                    <a className="link link-hover">Why Car Doctor</a>
                    <a className="link link-hover">About</a>
                </nav>
                <nav>
                    <header className="footer-title">Support</header>
                    <a className="link link-hover">Support Center</a>
                    <a className="link link-hover">Feedback</a>
                    <a className="link link-hover">Accesbility</a>
                </nav>
            </footer>
            <h3 className='text-white font-semibold text-center -mt-16 pb-10'>©All rights reserved | <span className='text-[orangered] font-bold'>Nahid Hasan</span></h3>
        </div>
    );
};

export default Footer;