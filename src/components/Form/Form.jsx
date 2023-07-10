const { Component } = require('react');

class Form extends Component {
  state = { name: '', email: '' };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.props.closeForm();
  };
  render() {
    const { handleChange, handleSubmit } = this;

    return (
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input onChange={handleChange} type="text" name="name" />
        </label>
        <label>
          email:
          <input onChange={handleChange} type="email" name="email" />
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}
export default Form;
