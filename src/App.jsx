import SearchBar from './components/SearchBox';
import './App.css';
import CardList from './components/CardList';
import { useState } from 'react';
import { getCards } from './services/pokemonService';

function App() {
  const [cards, setCards] = useState([]);

  const handleSearch = async (name) => {
    const updatedCards = await getCards(name);
    setCards(updatedCards);
  }

  return (  
    <div id="main-container">
      <SearchBar onSearch={handleSearch}/>
      <CardList cards={cards} />
    </div>
  )

}

export default App;
