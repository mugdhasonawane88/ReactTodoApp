import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>{this.props.todos.length} items left</p>
        <ul>
          {/* <li><a>All</a></li>
          <li><a>Active</a></li>
          <li><a>Completed</a></li> */}
          <li><a onClick={this.props.onClearCompletedHandle.bind(this)}> Clear Completed</a></li>
          <li><a onClick={this.props.onClearAllHandle.bind(this)}> Clear All</a></li>
        </ul>
      </div>

    );
  }
}

export default Footer;