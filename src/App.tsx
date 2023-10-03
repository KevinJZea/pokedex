import { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/pokemons" />}
        />
        <Route
          path="/pokemons"
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
    </BrowserRouter>
  );
}

export default App;
