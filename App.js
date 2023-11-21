
import React from 'react';
import ReactDOM from 'react-dom/client';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nom: '', prenom: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      const target = event.target;
      const name   = target.name;
      const value  = target.value;
    this.setState({
        [name]: value
    });
  }

  handleSubmit(event) {
  
    alert('The First name is: ' + this.state.nom + 'The Last name is: ' + this.state.prenom);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          FirstName:
          <input type="text" name="nom" value={this.state.value} onChange={this.handleChange} />
          <br/>
          LastName:
           <input type="text" name="prenom" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NameForm />);
