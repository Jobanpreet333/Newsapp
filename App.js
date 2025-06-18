import './App.css';
import Navbar from './components/Navbar'
import Kids from './components/Kids'
import Women from './components/Women'
import Men from './components/Men'
import Beauty from './components/Beauty'
import Home from './components/Home'
// import Wear from './components/Wear'
import Wears from './components/Wears'
import Endsection from './components/Endsection'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>

    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/women" element={<Women />} />
          <Route exact path="/men" element={<Men />} />
          <Route exact path="/kids" element={<Kids />} />
          <Route exact path="/beauty" element={<Beauty />} />
          {/* <Route exact path="/wear" element={<Wear/>} /> */}
          <Route exact path="/wears" element={<Wears/>} />
        </Routes>
        
      </div>
  <Endsection/>
    </Router>
    </>

  );
}

export default App;
