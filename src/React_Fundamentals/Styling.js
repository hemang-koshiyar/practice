import React from "react";
import "../styling/styling.css";

const Styling = () => {
  const Box = ({ className = "", style, ...otherProps }) => {
    return (
      <div
        className={`box ${className}`}
        style={{ fontStyle: "italic", ...style }}
        {...otherProps}
      ></div>
    );
  };
  const smallBox = (
    <Box className="box--small" style={{ background: "lightblue" }}>
      Small Lightblue box
    </Box>
  );
  const mediumBox = (
    <Box className="box--medium" style={{ background: "pink" }}>
      Medium Pink box
    </Box>
  );
  const largeBox = (
    <Box className="box--large" style={{ background: "orange" }}>
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
