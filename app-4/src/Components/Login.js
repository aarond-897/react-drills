import React, { Component } from 'react';

class Login extends Component{
  constructor(props){
    super(props);
      this.state={
        username:'',
        password:''
      }
  }

  handleUsername=(e)=>{
    console.log(e)
    this.setState({
      username: e.target.value
    })
  }

  handlePassword = (e)=>{
    this.setState({
      password: e.target.value
    })
  }

  handleClick=()=>{
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

  render(){
    return(
      <div>
      <input type="text" onChange={(e)=>this.handleUsername(e)} value={this.state.username}/>
      <input type="text" onChange={(e)=>this.handlePassword(e)} value={this.state.password}/>
      <button onClick={this.handleClick}>Login</button>
      </div>
    )
  }
}

export default Login;