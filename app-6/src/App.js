import React, { Component } from 'react';
import './App.css';
import Todo from './Componenets/Todo';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      list:[],
      input:''
    }
  }

  handleChange=(val)=>{
    console.log(val)
    this.setState({
      input:val
    })
  }

  addTask=()=>{
    console.log(this)
    this.setState({
      list:[...this.state.list, this.state.input],
      input: ""
    })
  }

  render(){
    let list = this.state.list.map((element,i)=> {
      return <Todo key={i} task={element} />
    })

    return(
      <div className="App">
        <h1>My to-do list:</h1>
        {console.log('hello')}
        <input type="text" value={this.state.input}
        placeholder="Enter new task"
        onChange={(e)=>this.handleChange(e.target.value)}/>
        <button onClick={this.addTask}>Add</button>
        {console.log(list)}
        {list}
      </div>
    )
  }
}

export default App;
