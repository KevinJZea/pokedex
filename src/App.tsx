import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';
import { PokemonProfile } from './components/PokemonProfile/PokemonProfile';
import { PokemonsList } from './components/PokemonsList/PokemonsList';
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
            element={<PokemonsList />}
          />
          <Route
            path=":id"
            element={<PokemonProfile />}
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
