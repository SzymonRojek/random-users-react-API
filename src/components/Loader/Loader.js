import "./styles.css";

const Loader = ({ label }) => (
  <div className="loader-wrapper">
    <div className="loading-circle" />
    <p className="loading-text">{label}</p>
  </div>
);

export default Loader;
