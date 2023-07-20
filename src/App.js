
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Data from './components/data.js'
import About from './components/About';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='contacts'>
        {cards}
      </div>
      <About />
      
    </div>
  );
}
const cards = Data.map(data => {
  return (<Contact key={data.id} img={data.coverImg}
    rating={data.stats.rating} 
    reveiewCount={data.stats.reviewCount} location={data.location} title={data.title} price={data.price} spots ={data.openSpots}/>)
  });

export default App;
