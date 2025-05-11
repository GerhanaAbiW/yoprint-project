import { Button } from "@mui/material";
import React from "react";

interface ButtonComponentProps {
  text: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  startIcon?: React.ReactNode;
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  style,
  width,
  height,
  startIcon,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      startIcon={startIcon}
      sx={{
        width: width ?? "auto",
        height: height ?? "auto",
        textTransform: "none",
        ...style,
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
