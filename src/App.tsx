// import './App.css';
import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Ejercicios } from './pages/Ejercicios';
import { Usuarios } from './pages/Usuarios';
import { Layout } from './components/Layout';
import { Rutinas } from './pages/Rutinas';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ejercicios" element={<Ejercicios />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="rutinas" element={<Rutinas />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
