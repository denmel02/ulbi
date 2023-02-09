import { RouterLink } from "shared";
import classes from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={ classes.navbar}>
      <div className={ classes.links }>
        <RouterLink to="/" variant="secondary">Main</RouterLink>
        <RouterLink to="/about" variant="secondary">About</RouterLink>
      </div>
    </div>
  );
}