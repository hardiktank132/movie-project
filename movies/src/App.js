import logo from './logo.svg';
import './App.css';
import "./components/movies.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Movies from './components/movies';
// import Signup from './components/signup';
import Login from './components/login';
import Signup from './components/signup';
// import Movies from './components/movies';
import Movie from './components/Movie';
import SeatBooking from './components/seatbooking';
function App() {
  return (
    <>
  {/* <Movies/> */}
  {/* <Signup/> */}
  {/* <Movie/> */}
  <BrowserRouter>
  <Routes>
    <Route path='/home' element={<Movie/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/booking' element={<SeatBooking/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  
  );
}

export default App;
