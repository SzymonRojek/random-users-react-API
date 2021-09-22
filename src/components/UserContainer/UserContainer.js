import { Link } from "react-router-dom";

import "./styles.css";

const UserContainer = ({ to, icon, children, className, style }) => (
  <div className="card-container" style={style}>
    <div className={`user-wrapper ${className}`}>
      {children}

      <Link to={to}>
        <div className="arrow-wrapper">
          <img src={icon} alt="arrow" className="arrow-icon" />
        </div>
      </Link>
    </div>
  </div>
);

export default UserContainer;
