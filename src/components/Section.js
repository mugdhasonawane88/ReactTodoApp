import React, { Component } from 'react';

class Section extends Component { 

  checkboxClick=(task)=>{   
    this.props.onCheckboxClick(task);
  }

  render() {     
    return (
      <div className="main">   
       <ul className="todo-list">
          {
            this.props.todos.map((ele,index)=>{
              return  (<li key={index}>
                  <input type="checkbox" className="form-check-input listChkbox" 
                    checked={ele.isCompleted} 
                    onClick={this.checkboxClick.bind(this,ele.task)}
                  />
                  <input className="form-control listbox" type="text" value ={ele.task}/>                 
                  <div className="closebtn" 
                  onClick={this.props.onCloseHandle.bind(this,ele)}><i className="fas fa-times"></i></div>
              </li>);              
            })
          }
                           
        </ul> 
      </div> 

    );
  }
}

export default Section;