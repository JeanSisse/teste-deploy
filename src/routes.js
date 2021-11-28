import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { GlobalProvider } from "./Contexts/GlobalContext/GlobalContext";
import { AuthProvider } from "./Contexts/AuthContext/AuthContext";
import useAuth from './Hooks/Hook-Authentication/useAuth';

import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Home from "./Pages/Home";
import Cliente from "./Pages/Cliente";

function RotasProtegidas(props) {
  const { handleToken, token } = useAuth();

  handleToken();

  return (
    <Route
      render={() => token ? props.children : <Redirect to="/" />}
    />
  )
}

function Routes() {
  return (
    <Router>
      <Switch>
        <GlobalProvider>
          <AuthProvider>
            <Route path={["/", "/login"]} exact component={Login} />
            <Route path="/cadastro" exact component={Cadastro} />
            <RotasProtegidas >
              <Route path="/home" exact component={Home} />
              <Route path="/cliente" exact component={Cliente} />
            </RotasProtegidas>
          </AuthProvider>
        </GlobalProvider>
      </Switch>
    </Router>
  )
}

export default Routes;