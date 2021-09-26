import './App.css';
import logo from './githubIcon.png';

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/renatoaps">
       <img src={logo} className="footer-logo"  alt="logo" />
      </a>
    </div>
  );
}