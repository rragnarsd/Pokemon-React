import './SearchBox.css';
import { useState } from "react";

const SearchBar = ({onSearch}) => {
    const [name, setName] = useState('');
    return (
    <div id="search-box">
        <input onChange={(event) => setName(event.target.value)} type="text" id="search-input" />
        <button type="submit" onClick={() => onSearch(name)}>Search</button>
    </div>
    );
}

export default SearchBar;