import React from "react";

const layout = props => {
  return (
    <>
      <header>
        <h1>Social Media Dashboard</h1>
        <div>
          <p>Total Follower: 24,000</p>
          <div>DARK MODE TOGGLE</div>
        </div>
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default layout;
