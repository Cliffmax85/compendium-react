import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PokemonList from "./views/Pokemon/PokemonList";

export default function App() {
  return (
  <Router>
    <Switch>
      <Route path='/'>
        <PokemonList />
      </Route>
    </Switch>
  </Router>);
}
