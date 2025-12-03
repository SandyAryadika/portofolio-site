import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="glass-nav">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#certificates">Certificate</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
