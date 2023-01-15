import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Experience from './components/experience';
import Education from './components/education';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
        <About></About >
        <Contact></Contact>
        <Experience></Experience>
        <Education></Education>
    </div>
  );
}
export default App;

