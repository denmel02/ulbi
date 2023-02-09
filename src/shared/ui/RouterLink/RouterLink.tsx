import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "../../lib";
import classes from "./RouterLink.module.scss";

type RouterLinkVariant = 'primary' | 'secondary';

interface RouterLinkProps extends LinkProps {
  variant?: RouterLinkVariant;
}

export const RouterLink: FC<RouterLinkProps> = (props) => {
  const { className, variant = 'primary', ...linkProps } = props;

  return (
    <Link
      className={ classNames(className, classes[variant]) }
      { ...linkProps }
    />
  );
}