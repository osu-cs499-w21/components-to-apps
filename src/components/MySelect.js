import React from 'react';

class MySelect extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: Object.keys(props.options)[0]
    // };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onValueChange(event.target.value);
  }

  render() {
    console.log("== keys:", Object.keys(this.props.options));
    return (
      <select
        value={this.props.value}
        onChange={this.handleChange}
      >
        {Object.keys(this.props.options).map(key => (
          <option key={key} value={key}>
            {this.props.options[key]}
          </option>
        ))}
      </select>
    )
  }
}

export default MySelect;
