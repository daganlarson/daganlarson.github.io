import { ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" id="title">
        Dagan Larson
      </NavLink>
      <ul className="nav_items">
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

interface NavLinkProps {
  to: string;
  children: ReactNode;
  id?: string;
}

function NavLink({ to, children, id, ...props }: NavLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <div className={isActive ? "active navlink" : "navlink"} id={id}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export default Navbar;
