    import React from "react";
    
    export default class SearchBar extends React.Component {
      // onInputChange(event) {
      //   console.log(event.target.value);
      // }
    
      // initialize a state for controlled event
      state = { inputValue: "" };
    
      // form submit
      onFormSubmit = (e) => {
        e.preventDefault();
    
        this.props.searchOnSubmit(this.state.inputValue);
      }
      render() {
        return (
          <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
              <div className="field">
                <label> Image Search</label>
                <input type="text" value={this.state.inputValue} onChange={e => this.setState({ inputValue: e.target.value })} />
              </div>
            </form>
          </div>
        )
      }
    }