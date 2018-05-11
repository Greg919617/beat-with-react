import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';



class Search extends Component {
    state = {
    
    
};



onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
};
    
  render() {
    return (
      <div>
        <TextField
            name="searchText"
            value ={this.state.searchText}
            onChange= {this.onTextChange}
            floatingLabelText="Search For Songs"
            fullwidth={true} 
            />
      </div>
    );
  }
}
export default Search;