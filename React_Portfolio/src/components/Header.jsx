function Header() {
    return (
    <header>
    <h1 className="logo"><a href="/">SM</a></h1>
    <nav className="menu">
        <a href="/" className="menuBarText">About Me</a>
        <a href="/Portfolio" className="menuBarText">Portfolio</a>
        <a href="/Contacts" className="menuBarText">Contacts</a>
        <a href="/Resume" className="menuBarText">Resume</a>
    </nav>
    </header>
    );
  }
  
  export default Header;