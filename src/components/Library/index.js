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
      <a-collada-model  id="library"
                src="#biblioteca"
                scale="1.2 1.2 1.2"
                position="11.5 0 -28"
                rotation="0 90 0">
        <a-collada-model  id="candle" onClick={this.props.turnOnTheLights} src="#candle" position="9 0 -13"
                  scale="4 4 4"></a-collada-model>
        <a-collada-model  id="voldemort" src="./models/voldemort/model.dae" position="10 0 -6" rotate="0 0 90" rotation="90 300 90" scale="0.01 0.01 0.01"></a-collada-model>
      </a-collada-model>)
  }
}

export default Library