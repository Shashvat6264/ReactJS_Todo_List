import React from 'react';
import './App.css';

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      class: 'todo'
    }
  }

  handleClick = () => {
    if (this.state.class==='done'){
      this.props.onClick();
    }
    else{
      this.setState({class: 'done'});
    }
  }

  render(){
    return(
        <li className={this.state.class}>
          <button className="makeimpbtn btn-primary" onClick={()=>{this.setState({class:'importantdo'})}}></button>
          <span className="todotext" onClick={this.handleClick}>{this.props.value}</span >
        </li>
    );
  }
}

class Todolist extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: ['Welcome']
    };
  }

  addtodo = () => {
    var todo = document.getElementById("todo");
    var value = todo.value;
    if (value !== ''){
      var todos = this.state.todos.slice();
      todos.push(value);
      this.setState({
        todos: todos
      });
      todo.value = '';
    }
  }

  deletetodo = (value) => {
    var todos = this.state.todos.slice();
    todos.splice(todos.indexOf(value), 1);
    this.setState({
      todos: todos
    }) 
  }

  render(){
    var list=[];
    for (let i=0;i<this.state.todos.length;i++){
      list[i] = <Todo value={this.state.todos[i]} onClick={() => this.deletetodo(this.state.todos[i])}/>
    }
    return(
      <div className="container">
        <ul>
          {list}
        </ul>
        <div className="form">
          <input type="text" id="todo" placeholder="Add a Todo"/>
          <input type="submit" value="Submit" onClick={this.addtodo}/>
        </div>
      </div>
    );
  }
}

export default Todolist;
