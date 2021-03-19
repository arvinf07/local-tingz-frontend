import './App.css';
import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import LocationsContainer from './components/LocationsContainer';


function App() {
  return (
    <div>
      <NavBar />
      <header>
        Hi World!
      </header>
      <SearchBar />
      <LocationsContainer />
    </div>
  );
}

export default App;
