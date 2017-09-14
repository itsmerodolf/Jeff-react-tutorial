import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className='my-pos'>
      <ItemsList/>
    </div>
      );
    }
  }

  class Item extends Component {
    constructor(props) {
      super(props);
      this.state = {amount:0};
      this.buy = this.buy.bind(this);
    }

    buy () {
      this.setState({amount: this.state.amount + 1});
    }

    render() {
      return (
        <div>
        <h4>{this.props.name}</h4>

        <p>{this.props.description}</p>
        <button onClick={this.buy}>Buy</button
        <button onClick={this.show}>Show</button>
        <span>${this.props.price}</span>
        <span> (Cart: {this.state.amount} items.)</span>
        <hr/>
        </div>
      );
    }
  }

  class ItemsList extends Component {
    render () {
      return(
        <div>
        <Item name="Lenovo"
        description= "Core i5 -4gb ram -256gb SSD"
        price = {540}/>
        <Item name="Dell"
        descriptio= "Core i7 -8gb ram -1tb SSD"
        price = {700}/>
        <Item name="Asus"
        descriptio= "Core i3 -4gb ram - 512gb HDD"
        price = {430}/>
        </div>
      );
    }
  }

export default App;
