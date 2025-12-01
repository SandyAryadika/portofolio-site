import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="glass-nav">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
