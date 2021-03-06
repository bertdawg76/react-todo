var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit} className="todo-form">
          <input type="text" ref="todoText" placeholder="Enter Todo"/>
          <button className="button expanded">Submit Todo</button>
        </form>
      </div>

    )
  }
});

module.exports = AddTodo;