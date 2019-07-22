import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushis: [],
    money: 100
  }

  fetchSushis = () => {
    return fetch(API)
      .then(resp => resp.json())
  }

  componentDidMount(){
    this.fetchSushis()
      .then(sushis => this.setState({sushis}))
  }

  rotateSushis = () => {
    this.setState(
      {sushis: this.state.sushis.slice(4).concat(this.state.sushis.slice(0,4))}
    )
  }

  eatSushi = (sushi) => {
    this.setState({
      eatenSushis: [
        ...this.state.eatenSushis,
        sushi.id,
      ]
  })
    this.setState({
      money: this.state.money - sushi.price
    })
}

  isEaten = (sushi) => {
    return this.state.eatenSushis.includes(sushi.id)
  }



  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis.slice(0,4)} rotateSushis={this.rotateSushis} eatSushi={this.eatSushi} isEaten={this.isEaten}/>
        <Table money={this.state.money} plates = {this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;