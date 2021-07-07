import "./Menu.scss";

const Menu = ({isMenuOpen, setIsMenuOpen}) => {
  return (
    <nav className={isMenuOpen ? "menu active" : "menu"}>
      <ul onClick={() => setIsMenuOpen(false)}>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
