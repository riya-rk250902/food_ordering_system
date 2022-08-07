import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './Components/login';
import Signup from './Components/signup';
import Home from './Components/home';
import Slideimg from './Components/Slideimg'

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
        <Route exact path="/Slideimg" element={<Slideimg/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;