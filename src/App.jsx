import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaCartas from './components/ListaCartas';
import { Cartas } from './components/Cartas';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ListaCartas />} />
          <Route path="/Cartas/:id" element={<Cartas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
