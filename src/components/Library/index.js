import React, {Component} from 'react'

class Library extends Component {

  constructor() {
    super()
    this.castASpell = this.castASpell.bind(this)
  }

  castASpell(){
    this.props.startRecognition()
  }

  render() {
    return (
      <a-collada-model id="library"
                       src="#biblioteca"
                       scale="1.2 1.2 1.2"
                       position="11.5 0 -28"
                       rotation="0 90 0">
        <a-collada-model id="candle" onClick={this.castASpell} src="#candle" position="9 0 -13"
                         scale="4 4 4"></a-collada-model>
        {
          this.props.voldemortVisible &&
          <a-collada-model  onClick={this.castASpell}  id="voldemort" src="./models/voldemort/model.dae" position="10 0 -6" rotate="0 0 90"
                           rotation="90 300 90" scale="0.01 0.01 0.01">
            <a-animation
              attribute="rotation"
              dur="3000"
              to="0 0 0"
              easing="linear"
              begin="avadaKedavra"
              />
          </a-collada-model>
        }
      </a-collada-model>)
  }
}

export default Library