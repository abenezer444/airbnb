import React from "react";

const About = () => {
  const about = [
    "We provide best Homes at a very little price",
    "We are your Trusted partners",
    "AirBnb Your Home.",
  ];
  return (
    <div>
      <h2>This is heading for the about Part</h2>
      {about.map((abt, ind) => {
        <div key={ind}>{abt}</div>;
      })}
    </div>
  );
};

export default About;
