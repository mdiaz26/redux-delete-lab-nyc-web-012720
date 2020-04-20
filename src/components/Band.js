import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        {console.log(this.props)}
        <li>{this.props.band.name}</li>
        <button onClick={() => this.props.delete(this.props.band.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
