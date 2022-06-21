import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Pvp from './Pvp';
import Pvc from './Pvc';
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/pvp" element={<Pvp></Pvp>}></Route>
      <Route path="/pvc" element={<Pvc></Pvc>}></Route>
      <Route path="/" element={<Home/>}></Route>
      </Routes>
      </Router>
</>
  );
}

export default App;
