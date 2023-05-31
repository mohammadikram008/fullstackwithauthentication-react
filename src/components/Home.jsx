import React, { Fragment } from "react";
import backgroundImage from "./Assets/images/bg.jpg";
const Home = () => {
  return (
    <Fragment>
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="home">
          <p>WellCome To MernStack Development</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
