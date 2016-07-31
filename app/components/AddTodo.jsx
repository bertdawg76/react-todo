var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e){
    e.preventDefault();
    var todoText = this.refs.todos.value;
    if (todoText.length > 0) {
      this.refs.todos.value = '';
      this.props.onTodoSubmit(todoText);
    } else {
      this.refs.todos.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="todo-form">
          <input type="text" ref="todos" placeholder="Enter Todo"/>
          <button className="button expanded">Submit Todo</button>
        </form>
      </div>

    )
  }
});

module.exports = AddTodo;