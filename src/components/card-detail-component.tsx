import React from "react";

interface CardDetailComponentProps {
  title: string | number;
  subtitle: string | number;
  color?: string;
  titleStyle?: React.CSSProperties;
  subtitleStyle?: React.CSSProperties;
}

const CardDetailComponent: React.FC<CardDetailComponentProps> = ({
  title,
  subtitle,
  color = "#FFFFF",
  titleStyle,
  subtitleStyle,
}) => {
  return (
    <div
      style={{
        width: 150,
        height: 100,
        backgroundColor: color,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <span style={{ fontSize: "24px", fontWeight: "bold", ...titleStyle }}>
        {title}
      </span>
      <span style={{ fontSize: "14px", fontWeight: "bold", ...subtitleStyle }}>
        {subtitle}
      </span>
    </div>
  );
};

export default CardDetailComponent;
