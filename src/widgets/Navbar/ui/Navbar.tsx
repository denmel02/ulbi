import { RouterLink, ToggleThemeButton } from "shared";
import classes from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={ classes.navbar}>
      <ToggleThemeButton />
      <div className={ classes.links }>
        <RouterLink to="/" variant="secondary">Main</RouterLink>
        <RouterLink to="/about" variant="secondary">About</RouterLink>
      </div>
    </div>
  );
}