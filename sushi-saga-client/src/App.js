import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis:[],
    selectSushi:[],
    index:5,
    previous:0,
    eaten:[],
    budget: 100
  }
  handleFilterSushi = () =>{
    let filteredSushi = this.state.sushis.filter(sushi => sushi.id < this.state.index && sushi.id > this.state.previous)
    this.setState({selectSushi: filteredSushi})
  }
  handleNextSushi = () =>{
    let currIndex = this.state.index
    let newIndex = currIndex + 5
    let currPrevious = this.state.previous
    let newPrevious = currPrevious + 5
    this.setState({index: newIndex, previous: newPrevious}, () => this.handleFilterSushi())
  }
  handleEatSushi = (sushi) =>{
    let newBudget =  this.state.budget - sushi.price
    if(!this.state.eaten.includes(sushi) && newBudget > 0){
      this.setState({eaten: [...this.state.eaten, sushi], budget: newBudget})
    }
  }

  componentDidMount = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      this.setState({sushis:data})
      this.handleFilterSushi(data)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.selectSushi} handleNextSushi={this.handleNextSushi} handleEatSushi = {this.handleEatSushi} eaten={this.state.eaten}/>
        <Table budget={this.state.budget} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
