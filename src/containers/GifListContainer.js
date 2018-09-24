import React, {Component} from 'react'
import GifList from '../components/GifList'

class GifListContainer extends Component {

  state = {
    gifData: []
  }
  
  getGifs = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.props.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          gifData: data.data
        })
      })
  }
  
  componentDidMount() {
    this.getGifs()
  }
  
  componentDidUpdate() {
    this.getGifs()
  }
  
  render() {
    return (
      < GifList list={this.state.gifData} />
    )
  }
}

export default GifListContainer