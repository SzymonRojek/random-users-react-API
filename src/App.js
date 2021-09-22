import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";

export const App = () => (
  <BrowserRouter>
    <Navigation />

    <Switch>
      <Route exact path="/users" component={UsersPage} />

      <Route path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default App;
