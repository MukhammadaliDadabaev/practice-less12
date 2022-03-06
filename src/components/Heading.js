import React from "react";

const Heading = () => {
	const date = new Date();
  const currentTime = date.getHours();

  let greeting = "";

  const customStyle = {
    color: "",
  };
	
  if (currentTime < 7) {
    greeting = "Good morning";
    customStyle.color = "green";
  } else if (currentTime < 13) {
    greeting = "Good afternoon";
    customStyle.color = "blue";
  } else {
    greeting = "Good night";
    customStyle.color = "red";
  }
  return (
			<h1 style={customStyle}>{greeting}</h1>
		);
};

export default Heading;