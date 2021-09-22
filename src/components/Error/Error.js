import "./styles.css";

const Error = () => (
  <div className="error-wrapper">
    <div className="error-emoji">:(</div>
    <p className="error-text">There is a problem with loading data.</p>
    <p className="error-text">Possible check internet connection...</p>
  </div>
);

export default Error;
