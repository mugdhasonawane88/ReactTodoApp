import React from 'react';
import { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const createInput = this.refs.taskid;
    const task = createInput.value;
    this.props.onHandleCreate(task);
    createInput.value = "";
    e.preventDefault();
  };



    render() {
      return (
        <form onSubmit={this.handleClick}>
          <div className="header">
            <h1>todos</h1>
            <input type="text" className="new-todo form-control" placeholder="What needs to be done?" ref="taskid" />
          </div>
        </form>

      );
    }
  }

  export default Header;
