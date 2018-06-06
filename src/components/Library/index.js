import React, {Component} from 'react'

class Library extends Component {

  constructor() {
    super()
    this.castASpell = this.castASpell.bind(this)
  }

  castASpell() {
    this.props.startRecognition()
  }

  render() {
    console.log(this.props.voldemortKilled)
    return (
      <a-collada-model id="library"
                       src="#biblioteca"
                       scale="1.2 1.2 1.2"
                       position="11.5 0 -28"
                       rotation="0 90 0">
        <a-collada-model id="candle"
          className="clickable"  
          onClick={this.castASpell} 
          src="#candle" 
          position="9 0 -13"               
          scale="4 4 4"></a-collada-model>

        <a-light type="point" light="type: spot; color: #fff4bb; intensity: 0.96; decay: 0.5; shadowCameraFar: 50; shadowCameraFov: 10" position="9.730664511180809 2 -11.489144572147127"></a-light>
        <a-collada-model onClick={this.castASpell}
                         visible={this.props.voldemortVisible}
                         id="voldemort"
                         className="clickable" 
                         src="./models/voldemort/model.dae"
                         position="10 0 -6" rotate="0 0 90"
                         rotation="90 300 90" scale="0.01 0.01 0.01">
          {this.props.voldemortKilled &&
          <a-animation
            attribute="rotation"
            dur="3000"
            to="0 -90 0"
            easing="linear"
            start="500"
          />
          }
          {this.props.voldemortKilled &&

          <a-animation attribute="position"
                       dur="3000"
                       to="10 0.8 -6"
                       easing="linear"
                       start="500"
          />
          }
        </a-collada-model>

      </a-collada-model>)
  }
}

export default Library