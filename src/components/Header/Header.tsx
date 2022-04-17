import { FC }      from "react"
import { NavLink } from "react-router-dom";




export const Header: FC = () => {
  return (
    <header className="header">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/posts"}>Posts</NavLink>
      <NavLink to={"/users"}>Users</NavLink>
    </header>
  );
};
