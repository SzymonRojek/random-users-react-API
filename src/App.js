import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles.css";
import Navigation from "./components/Navigation";

const App = () => (
  <BrowserRouter>
    <Navigation />
  </BrowserRouter>
);

export default App;
