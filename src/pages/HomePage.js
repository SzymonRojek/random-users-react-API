import React from "react";

import UsersImg from "./../images/users.png";

const HomePage = () => (
  <div className="homepage-container">
    <header>
      <h1>Welcome here!</h1>
      <p className="header-text">Get Random Profiles from API</p>
    </header>
    <div className="users-img-container">
      <img src={UsersImg} alt="users" className="users-img" />
    </div>
    <footer className="footer-homepage">© 2021 | Coded by Szymon Rojek</footer>
  </div>
);

export default HomePage;
