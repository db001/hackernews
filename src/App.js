import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'You don\'t know JS',
    url: 'https://github.com/getify/you-dont-know-JS',
    author: 'Kyle Simpson',
    num_comments: 7,
    points: 12, 
    objectID: 2
  },
  {
    title: 'JavaScript: Novice to Ninja',
    url: 'https://www.jsnovicetoninja.com',
    author: 'Darren Jones',
    num_comments: 4,
    points: 3,
    objectID: 3
  }
];  

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    /*
    Not needed as using arrow function to define functions
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    */
    
  }
  
  onDismiss = id => {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onSearchChange = event => {
    this.setState({ searchTerm: event.target.value })
  } 

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
          >Search
          </Search>
        </div>

        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default App;
