import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchValue: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
        return {monsters: users };
      },
        () => {
      }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchValue: searchField };
    });
  }

  render() {
    const { monsters, searchValue } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().startsWith(searchValue);
    });
    
    return (
      <div className="App">
        <h1 className="app-title">Monster's Rolodex</h1>

        <SearchBox 
          onChangeHandler={onSearchChange}
          className='monsters-search-box'
          placeholder='search monsters'
          />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
