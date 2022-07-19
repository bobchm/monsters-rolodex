import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    console.log('constructor');
    super();

    this.state = {
      monsters: [],
      searchValue: ''
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
        return {monsters: users };
      },
        () => {
        console.log(this.state);
      }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchValue: searchField };
    });
  }

  render() {
    console.log('render');

    const { monsters, searchValue } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().startsWith(searchValue);
    });
    
    return (
      <div className="App">
        <input  className='search-box' 
                type='search' 
                placeholder='search monsters' 
                onChange={onSearchChange} />
        {filteredMonsters.map((monster) => {
          return (<div key={monster.id}><h1>{monster.name}</h1></div>)
        })}
      </div>
    );
  }
}

export default App;
