
import './App.css';
import MainPage from './components/MainPage/MainPage';
import StorePage from './components/StorePage/StorePage';
import BasketPage from './components/BasketPage/BasketPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App_container">
     <Header/>
     <MainPage/>
     <StorePage/>
     <BasketPage/>
     <Footer/>
    </div>
  );
}

export default App;
