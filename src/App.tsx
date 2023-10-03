import { lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() =>
  import('./pages/Home').then((module) => ({
    default: module.Home,
  }))
);

const PokemonProfilePage = lazy(() =>
  import('./pages/PokemonProfilePage').then((module) => ({
    default: module.PokemonProfilePage,
  }))
);

const PokemonsListPage = lazy(() =>
  import('./pages/PokemonsListPage').then((module) => ({
    default: module.PokemonsListPage,
  }))
);

const NotFound = lazy(() =>
  import('./pages/NotFound').then((module) => ({
    default: module.NotFound,
  }))
);

import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        >
          <Route
            index
            element={<PokemonsListPage />}
          />
          <Route
            path=":id"
            element={<PokemonProfilePage />}
          />
        </Route>

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
