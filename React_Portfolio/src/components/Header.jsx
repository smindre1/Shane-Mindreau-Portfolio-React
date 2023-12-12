function Header() {
    return (
    <header>
    <h1>Shane Mindreau</h1>
    <nav className="menu">
        <a href="#About-Me-Path" className="menuBarText">About Me</a>
        <a href="#My-Work-Path" className="menuBarText">My Work</a>
        <a href="#Contact-Me-Path" className="menuBarText">Contact Me</a>
        {/* I have yet to make a Resume webpage so it is not linked */}
        <a href="#Contact-Me-Path" className="menuBarText">Resume</a>
    </nav>
    </header>
    );
  }
  
  export default Header;