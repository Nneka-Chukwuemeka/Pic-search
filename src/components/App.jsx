import React from 'react'
import unsplash from '../api/unsplash.js';
import SearchBar from './SearchBar.jsx';
import ImageList from './ImageList.jsx'


class App extends React.Component {
  state = { images: [] }

  handlewhenSubmit = async (inputValue) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: inputValue }
    });

    this.setState({ images: response.data.results });
    console.log(response.data.results)
  }
  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar searchOnSubmit={this.handlewhenSubmit} />
       <ImageList images={this.state.images} />
      </div>);
  }
}
export default App;