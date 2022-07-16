import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./button.module.scss";

const Button = ({
  children,
  className,
  type,
  color = "primary",
  onClick,
  innerRef,
  ...rest
}) => {
  const buttonClass = clsx(
    className,
    {[styles.primary]: color === "primary"},
    {[styles.secondary]: color === "secondary"},
    {[styles.icon]: type === "icon"},
    {[styles.iconBorder]: type === "icon-border"},
    {[styles.iconText]: type === "icon-text"},
    {[styles.text]: type === "text"}
  );

  const buttonType = type === "submit" ? "submit" : "button";
  const buttonOnClick = type === "submit" ? null : onClick;

  return (
    <button
      type={buttonType}
      onClick={buttonOnClick}
      className={buttonClass}
      ref={innerRef}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "none"]),
  type: PropTypes.string,
  onClick: PropTypes.func,
  innerRef: PropTypes.object,
};

export default Button;
