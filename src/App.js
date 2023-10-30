import './App.css';
 
import NavBar from './componats/NavBar';
import Header from './componats/header/Header';
import Projects from './componats/header/Projects';
import About from './componats/About';
import AboutTow from './componats/AboutTow';
import Blog from './componats/blog';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Projects/>
      <About/>
      <AboutTow/>
      <Blog/>
     
 
    </div>
  );
}

export default App;
