import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PokemonList from "./views/Pokemon/PokemonList";

export default function App() {
  return (
  <Router>

        <PokemonList />

  </Router>);
}
