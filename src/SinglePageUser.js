import React from "react";
import { useParams } from "react-router-dom";
const SinglePageUser = () => {
  const { userId } = useParams();
  return <div>I'm Single Page User {userId}</div>;
};
export default SinglePageUser;
