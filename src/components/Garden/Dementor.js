import React, {Component} from 'react'

class Dementor extends Component {
  constructor() {
    super();
    this.state = {}
    this.castASpell = this.castASpell.bind(this)
  }

  castASpell(){
    this.props.startRecognition()
  }

  render() {
    const {position, rotation, to, runTo, id} = this.props
    return (
      <a-collada-model className="dementor-model"
                id={id}
                onClick={this.castASpell}
                src="#dementor"
                position={position}
                rotation={rotation}
                scale="0.03 0.03 0.03"
      >
        <a-animation attribute="position"
                     dur="3000"
                     to={to}
                     repeat="indefinite"
                     easing="linear"
                     direction="alternate"
                     end="expectoPatronum"
        ></a-animation>
        <a-animation attribute="position"
                     dur="3000"
                     to={runTo}
                     easing="linear"
                     direction="alternate"
                     begin="expectoPatronum"
        ></a-animation>

        <a-animation begin="expectoPatronum" attribute="visible" delay="1500" to="false"
                     repeat="indefinite"></a-animation>


      </a-collada-model>
    );
  }
}

export default Dementor;
