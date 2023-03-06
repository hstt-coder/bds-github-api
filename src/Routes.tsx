import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "pages/Home";

import ProfileSearch from "pages/ProfileSearch";
import Navbar from 'components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/profilesearch" exact>
        <ProfileSearch/>
      </Route>
    </Switch>
</BrowserRouter>
)


export default Routes;
