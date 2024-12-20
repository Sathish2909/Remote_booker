import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="navcontainer">
            <span className="logo">Sandy's Booker</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>

            </div>
        </div>
    </div>
  )
}

export default Navbar;