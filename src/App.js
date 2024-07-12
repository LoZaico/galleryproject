import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dosomethinggreatneon from './components/Dosomethinggreatneon'
import Neonbluesharp from './components/Neonbluesharp';
import Neoncactus from './components/Neoncactus';
import Neonheart from './components/Neonheart';
import Neonhello from './components/Neonhello';
import Neonpinkroom from './components/Neonpinkroom';
import Neonpurpletunnel from './components/Neonpurpletunnel';
import Neonray from './components/Neonray';
import Neonwall from './components/Neonwall';
import Southcoreaneon from './components/Southcoreaneon';
import Navegation from './components/Navegation';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/Dosomethinggreatneon" Component={Dosomethinggreatneon} />
        <Route path="/Neonbluesharp" Component={Neonbluesharp} />
        <Route path="/Neoncactus" Component={Neoncactus} />
        <Route path="/Neonheart" Component={Neonheart} />
        <Route path="/Neonhello" Component={Neonhello} />
        <Route path="/Neonpinkroom" Component={Neonpinkroom} />
        <Route path="/Neonpurpletunnel" Component={Neonpurpletunnel} />
        <Route path="/Neonray" Component={Neonray} />
        <Route path="/Neonwall" Component={Neonwall} />
        <Route path="/Southcoreaneon" Component={Southcoreaneon} />         
      </Routes>
      <Navegation />
   </Router>
  );
}

export default App;
