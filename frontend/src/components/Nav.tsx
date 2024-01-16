import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-between text-slate-100">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/pages">Pages</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
