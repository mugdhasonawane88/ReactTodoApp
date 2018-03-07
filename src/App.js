import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import Section from '../src/components/Section';
import Footer from '../src/components/Footer';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: 'a',
          isCompleted: true
        },
        {
          task: 'b',
          isCompleted: false
        },
      ]    
    };   
    this.handleCreate = this.handleCreate.bind(this);    
    this.closeHandle = this.closeHandle.bind(this);
    this.checkboxClickHandle = this.checkboxClickHandle.bind(this);
  }

  handleCreate = (task) => {
    let obj ={
      task,
      isCompleted :false
    };
   
    if(! this.state.todos.find((ele) => ele.task == task)){
      this.setState({
        todos: [...this.state.todos, obj],
        isCompleted : true
      })
    }else{
      window.alert("Task already exists");
    } 
  };

  closeHandle = (task) => {    
      let arr = this.state.todos;
      arr.splice(arr.indexOf(task), 1);
      this.setState({
        todos: [...arr]       
      })
  };

  checkboxClickHandle = (task) => { 
      let arr = this.state.todos;
      
      for(let i = 0; i < arr.length; i++) {
        if(arr[i].task == task) {
          arr[i].isCompleted = !arr[i].isCompleted;
        }
      }

      this.setState({
        todos: [...arr]      
      })
  };

  clearAllHandle = () => { 
    
    this.setState({
      todos: []
    })
  };

  clearCompletedHandle = () => { 
    let arr = this.state.todos;
    arr = arr.filter(ele =>(ele.isCompleted==false));
    this.setState({
      todos: [...arr]
    })    
  };

  render() {
    return (
      <div className="App">
        <div className="mainWrapper">
          <Header onHandleCreate={this.handleCreate} />
          <Section todos={this.state.todos} onCloseHandle={this.closeHandle} onCheckboxClick={this.checkboxClickHandle}/>
          <Footer 
            todos={this.state.todos}  
            onClearAllHandle={this.clearAllHandle} 
            onClearCompletedHandle={this.clearCompletedHandle}
          />
        </div>
      </div>
    );
  }
}

export default App;
