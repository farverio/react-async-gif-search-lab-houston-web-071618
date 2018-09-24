import React, {Component} from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
import GifSearch from './GifSearch'

// the App component should render out the GifListContainer component 

class App extends Component {
  
  state = {
    searchTerm: "pandas"
  }
  
  updateSearchTerm = (newSearchTerm) => {
    this.setState({
      searchTerm: newSearchTerm
    })
  }
  
  render() {
    return (
      <div>
        < NavBar color='black' title="Giphy Search" />
        < GifSearch search={this.updateSearchTerm} />
        < GifListContainer searchTerm={this.state.searchTerm}/>
      </div>
    )
  }
}

export default App
