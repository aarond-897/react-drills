import React, { Component } from 'react'
import Todo from "./Todo";

class List extends Component{
  render(){
    let list = this.props.tasks.map((element, i)=>{
      return <Todo key={i} task={element} />
    })

    return <div>{list}</div>
  }
}

export default List;