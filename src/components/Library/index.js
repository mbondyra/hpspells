import React, {Component} from 'react'


class Library extends Component {

  constructor() {
    super()
    this.camera = React.createRef();
    this.state = {
      spot: null
    }
  }

  render() {
    return (
      <a-entity id="library"
                collada-model="#biblioteca"
                scale="1.2 1.2 1.2"
                position="11.5 0 -28"
                rotation="0 90 0">
        <a-entity id="candle" onClick={this.props.turnOnTheLights} collada-model="#candle" position="9 0 -13" scale="4 4 4"></a-entity>
      </a-entity>)
  }
}

export default Library