import React from "react";

interface NavbarProps {
  title: string;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
  color?: string;
  backgroundColor?: string;
}

const NavbarComponent: React.FC<NavbarProps> = ({
  title,
  style,
  width,
  height,
  color = "#fff",
  backgroundColor = "#333",
}) => {
  return (
    <nav
      style={{
        backgroundColor,
        color,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        width,
        height,
        display: "flex",
        alignItems: "center",
        ...style,
      }}
    >
      <h1 style={{ paddingLeft: "1rem" }}>{title}</h1>
    </nav>
  );
};

export default NavbarComponent;
