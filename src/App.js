import { Component } from 'react'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }

    console.log('constructor')
  }

  componentDidMount() {
    console.log('component did mount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return {monsters: users}
          },
          () => {
            console.log(this.state)
          }
        )
      )
      .catch()
  }

  render() {
    console.log('render')

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField)
    })

    return <div className='App'>
      <input type="search" placeholder='Search monsters' className="search-box" onChange={(event) => {
        const searchField = event.target.value.toLowerCase()

        this.setState(() => {
          return {searchField}
        })
      }} />
      {filteredMonsters.map((monster) => {
        return (
          <div key={monster.name}>
            <h1>{monster.name}</h1>
          </div>
        )
      })}
    </div>
  }
}

export default App;
