import React from 'react';

 const Todo=(props)=>{
  console.log(props)
  return (
  <p>{props.task}</p>
  )
}


export default Todo;











///My original code is listed below. I only looked at the example, saw two components and got to work. When I saw question 7 built off question 6 I went back and changed it per the instructions.










// import React, {Component} from 'react';

// class Todo extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       userinput:'',
//       list: []
//     }
//   }

//   handleChange=(val)=>{
//     this.setState({
//       userinput: val
//     })
    
//   }

//   handleClick=()=>{
//     this.state.list.push(this.state.userinput);
//     const mappedList = this.state.list.map((item, i)=>{
//       return(
//           <div key={i}>{item}</div>
//       )
//     })
//     this.setState({
//       list: mappedList
//     })
//   }

//   render(){
//     return(
//       <div>
//         <h2>My to-do list:</h2>
//         <input type="text" onChange={(e)=>this.handleChange(e.target.value)} value={this.state.userinput}/>
//         <button onClick={this.handleClick}>Add</button>
//         {this.state.list}
//       </div>
//     )
//   }
// }

// export default Todo;