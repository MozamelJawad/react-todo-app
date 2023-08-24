import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links = [
        { path: '/', text: 'Home' },
        { path: 'about', text: 'About' },
        { path: 'profile', text: 'Profile' },
        { path: 'login', text: 'Login' },
      ];

   return (
  <nav className="navbar">
    <ul>
      {links.map((link) => {
        return (
          <li key={link.text}>
            <NavLink
                to={link.path}
                style={({ isActive }) => ({
                    color: isActive ? 'red' : undefined,
                })}
                >
                {link.text}
                </NavLink>

          </li>
        );
      })}
    </ul>
  </nav>
);
};

export default Navbar;