import { useState } from "react";
import { classNames, ToggleThemeButton } from "shared";
import { LanguageButton } from "../../../LanguageButton";
import classes from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [isCollapsed, setCollapsed] = useState(false);
  const onClick = () => setCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  return (
    <div className={ classNames(classes.sidebar, isCollapsed && classes.collapsed, className) }>
      <button onClick={ onClick }>Toggle</button>
      <div className={ classes.switchers }>
        <ToggleThemeButton />
        <LanguageButton className={ classes.language }/>
      </div>
    </div>
  );
}