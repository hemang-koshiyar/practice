import React from "react";
import PropTypes from "prop-types";

//Custom Component
const Message = ({ subject, greeting }) => {
  return (
    <div className="message">
      {greeting}, {subject}
    </div>
  );
};

//Defining propTypes
Message.propTypes = {
  greeting: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};

const CustomComponents = () => {
  //Return multiple items with an Array
  //   return [
  //     <Message greeting="Hello" subject="World" />,
  //     <Message greeting="Goodbye" subject="World" />,
  //   ];

  //Return multiple items with div node
  //   return (
  //     <div>
  //       <Message greeting="Hello" subject="World" />
  //       <Message greeting="Goodbye" subject="World" />
  //     </div>
  //   );

  //Return multiple items with React.Fragment
  return (
    <React.Fragment>
      <Message greeting="Hello" subject="World" />
      <Message greeting="Goodbye" subject="World" />
    </React.Fragment>
  );
};

export default CustomComponents;
