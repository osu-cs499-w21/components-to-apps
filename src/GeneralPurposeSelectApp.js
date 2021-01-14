import React from 'react';

import MySelect from './components/MySelect';

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

const starWarsOptions = {
  rey: "Rey",
  luke: "Luke Skywalker",
  leia: "Leia Organa",
  finn: "Finn (FN-2187)",
  kylo: "Kylo Ren"
};

const petOptions = {
  cat: "Cat",
  dog: "Dog",
  fish: "Fish",
  iguana: "Iguana"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starWars: Object.keys(starWarsOptions)[0],
      pet: Object.keys(petOptions)[0]
    };
    this.handleStarWarsChange = this.handleStarWarsChange.bind(this);
    this.handlePetChange = this.handlePetChange.bind(this);
  }

  handleStarWarsChange(value) {
    this.setState({
      starWars: value
    });
  }

  handlePetChange(value) {
    this.setState({
      pet: value
    });
  }

  render() {
    const squares = numbers.map(num => num * num);
    console.log("== squares:", squares);
    return (
      <div>
        <ul>
          {numbers.map(num => <li key={num.toString()}>{num}</li>)}
        </ul>
        <form>
          <MySelect
            options={starWarsOptions}
            value={this.state.starWars}
            onValueChange={this.handleStarWarsChange}
          />
          <MySelect
            options={petOptions}
            value={this.state.pet}
            onValueChange={this.handlePetChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h2>{starWarsOptions[this.state.starWars]} loves their {petOptions[this.state.pet]}</h2>
      </div>
    );
  }
}

export default App;
