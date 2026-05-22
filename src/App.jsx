import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Squad from './components/Squad';
import Matches from './components/Matches';
import Stats from './components/Stats';
import News from './components/News';
import FanZone from './components/FanZone';
import Gallery from './components/Gallery';
import PlayerSpotlight from './components/PlayerSpotlight';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-srh-black min-h-screen font-poppins text-white">
        <Navbar />
        <main>
          <Hero />
          <Squad />
          <PlayerSpotlight />
          <Matches />
          <Stats />
          <News />
          <FanZone />
          <Gallery />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
