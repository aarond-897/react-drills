import React, { Component } from 'react';

class NewTask extends Component{
  constructor(props){
    super(props);
    this.state={
      input:''
    }
  }

  handleChange = (value)=>{
    this.setState({
      input: value
    })
  }

  handleAdd = ()=>{
    this.props.add(this.state.input)
    this.setState({
      input: ""
    })
  }

  render(){
    return(
      <div>
        <input type="text" onChange={(e)=> this.handleChange(e.target.value)} value={this.state.input} placeholder='Enter new task'/>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    )
  }
}

export default NewTask;