import React, { Component } from 'react';
import { Select } from  'mews-ui';
import { MenuItem } from  'mews-ui';

class SimpleSelect extends Component {
  state = {};

  handleChange = selected => {
    this.setState({ selected });
  };

  render() {
    return(
     <Select selected={this.props.selected}
            onChange={this.props.onChange}
            label={this.props.label}
      >
      {Array.from(this.props.items).map(item  => (
        <MenuItem value={item.value} primaryText={item.label} />
      ))}
      </Select>
    )
  }
}

export default SimpleSelect;