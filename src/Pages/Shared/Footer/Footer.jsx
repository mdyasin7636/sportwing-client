import { Link } from 'react-router-dom';
import logo from '../../../../src/assets/logo.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
        <Link to="/">
          <div>
            <div className="w-16 ml-11">
              <img src={logo} />
            </div>
            <div>
              <p className="text-3xl font-bold">SportWing</p>
            </div>
          </div>
        </Link>
        </div>
        <div>
          <span className="font-bold text-lg">Contact</span>
          <a className="link link-hover font-semibold">Facebook</a>
          <a className="link link-hover font-semibold">Instagram</a>
          <a className="link link-hover font-semibold">Twitter</a>
        </div>
        <div>
          <span className="font-bold text-lg">Info</span>
          <a className="link link-hover font-semibold">About us</a>
          <a className="link link-hover font-semibold">Marketing</a>
          <a className="link link-hover font-semibold">Advertisement</a>
        </div>
        <div>
          <span className="font-bold text-lg">Legal</span>
          <a className="link link-hover font-semibold">Terms of use</a>
          <a className="link link-hover font-semibold">Privacy policy</a>
          <a className="link link-hover font-semibold">Cookie policy</a>
        </div>
        <div>
          <span className="font-bold text-lg">Explore</span>
          <a className="link link-hover font-semibold">Features</a>
          <a className="link link-hover font-semibold">Security</a>
          <a className="link link-hover font-semibold">Pricing</a>
        </div>
      </footer>
      <div className="footer footer-center p-4 bg-base-200 text-base-content font-bold">
    <p>Copyright © 2023 - All right reserved by SportWing</p>
  </div>
    </div>
  );
        
};

export default Footer;