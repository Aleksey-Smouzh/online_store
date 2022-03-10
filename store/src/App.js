
import './App.css';
import MainPage from './components/MainPage/MainPage';
import StorePage from './components/StorePage/StorePage';
import BasketPage from './components/BasketPage/BasketPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App_container">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/main' element={<MainPage />} />
          <Route path='/store' element={<StorePage />} />
          <Route path='/basket' element={<BasketPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
