import React, { Component, Fragment } from 'react';
import Card from './Components/Card/Card';

class App extends Component {
  
  state = {
    cards: [
      {image : 'https://images.unsplash.com/photo-1615292026763-3af006e59a67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', title: 'Ola Dybul', desc: 'ye laude jaisa naam kine rkkha tera re...'}
    ]
  }

  render() {
    return (
      <Fragment>
        <Card card1={this.state.cards[0]} />
      </Fragment>
    )
  }
}

export default App;