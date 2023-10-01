import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { PokemonsListPage } from './pages/PokemonsListPage/PokemonsListPage';
import { PokemonProfilePage } from './pages/PokemonProfilePage/PokemonProfilePage';
import { NotFound } from './pages/NotFound/NotFound';

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
