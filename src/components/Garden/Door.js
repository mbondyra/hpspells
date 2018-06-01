import React, {Component} from 'react'

class Door extends Component {
  constructor() {
    super();
    this.castASpell = this.castASpell.bind(this)
  }

  castASpell(){
    this.props.startRecognition()
  }

  render() {
    return (
      <a-entity id="door" onClick={this.castASpell} rotation="0 0 0" scale="2.8 2.4 2"  position="0.2 -0.5 12">
        <a-collada-model id="door-model" src="#door"
                          scale="0.5 0.5 0.5" rotation="0 0 0"></a-collada-model>
        <a-animation attribute="rotation"
                     dur="3000"
                     to="0 -90 0"
                     easing="linear"
                     begin="alohomora"
        ></a-animation>
      </a-entity>

    );
  }
}

export default Door;
