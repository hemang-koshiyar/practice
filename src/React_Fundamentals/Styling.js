import React from "react";
import "../styling/styling.css";

const Styling = () => {
  const Box = ({ className = "", style, size, ...otherProps }) => {
    const sizeClassName = size ? `box--${size}` : "";
    return (
      <div
        className={`box ${className} ${sizeClassName}`}
        style={{ fontStyle: "italic", ...style }}
        {...otherProps}
      />
    );
  };
  const smallBox = (
    <Box size="small" style={{ backgroundColor: "lightblue" }}>
      Small Lightblue box
    </Box>
  );
  const mediumBox = (
    <Box size="medium" style={{ backgroundColor: "pink" }}>
      Medium Pink box
    </Box>
  );
  const largeBox = (
    <Box size="large" style={{ backgroundColor: "orange" }}>
      Large Orange box
    </Box>
  );
  return (
    <React.Fragment>
      {smallBox}
      {mediumBox}
      {largeBox}
    </React.Fragment>
  );
};

export default Styling;
