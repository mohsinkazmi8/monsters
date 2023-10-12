import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[]
    }
  };
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((users)=>this.setState(()=>{
        return {monsters:users}
      },
      () =>{
        console.log(this.state)
      }
      ));
    }
  render(){
  return (
    <>
    {this.state.monsters.map((monster) =>{
      return (
        <div key={monster}>
            <h1>{monster.name}</h1>
        </div>
      )
        
    })}
    </>
  );}
}

export default App;
