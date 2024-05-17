import './App.css';

import { useState, useEffect } from'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [title, setTitleField] = useState('Monsters Rolodex');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users)
    );
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()

    setSearchField(searchFieldString)
  };

  const onTitleChange = (event) => {
    const titleFieldString = event.target.value.toLowerCase()

    setTitleField(titleFieldString)
  };

  return (
    <div className="App">
      <h1 className="app-title">{ title }</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search Monsters'
      />

      <br />

      <SearchBox
        className='title-search-box'
        onChangeHandler={onTitleChange}
        placeholder='Set Title'
      />

      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

export default App;
