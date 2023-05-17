import './App.css';

import Header from './pages/Header';
import Footer from './pages/Footer';

import Main from './pages/Main';
import Contact from './pages/Contact';

import { Link, useRoutes, Routes, Route } from "react-router-dom";

const routes = [
  {path: '/', element: <Main />},
  {path: '/contact', element: <Contact />},
];

function App() {
  const routing = useRoutes(routes);

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
  );
}


export default App;
