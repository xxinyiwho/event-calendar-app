import React, { Component } from 'react';

class EditEventForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.event.id,
      title: this.props.event.title,
      excerpt: this.props.event.excerpt
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault();
    const { id, title, description, start_date, end_date } = this.state;
    this.props.editEvent(id, title, description, start_date, end_date);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title"
          type="text"
          placeholder="Title..."
          value={this.state.title}
          onChange={this.handleChange} />
        <input name="description"
          type="text"
          placeholder="Description..."
          value={this.state.description}
          onChange={this.handleChange} />
        <input name="Start date"
          type="date"
          placeholder="Description..."
          value={this.state.start_date}
          onChange={this.handleChange} />
        <input name="End date"
          type="text"
          placeholder="End date..."
          value={this.state.end_date}
          onChange={this.handleChange} />
        <button>Update List</button>
      </form>
    )
  }
}
export default EditEventForm;