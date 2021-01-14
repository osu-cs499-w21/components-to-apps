import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Hello, ${this.state.name}!`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default App;
