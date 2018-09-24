import React, {Component} from 'react'

class GifSearch extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }
  
  render () {
    return (
      <div>
        <input type="text" ref={el => this.textInput = el}/>
        <button onClick={() => this.props.search(this.textInput.value)}>Search</button>
      </div>
    )
  }
}

export default GifSearch