import React, {Component} from 'react'

class Dementor extends Component {
  constructor() {
    super();
    this.state = {}
    this.expectoPatronum = this.expectoPatronum.bind(this)
  }

  expectoPatronum(ev) {
    ev.target.emit('expectoPatronum')
    setTimeout(()=>{this.props.onDefeat()} , 2000)
  }

  render() {
    const {position, rotation, to, runTo} = this.props
    return (
      <a-entity className="dementor-model"
                onClick={this.expectoPatronum}
                collada-model="#dementor"
                position={position}
                rotation={rotation}
                scale="0.03 0.03 0.03"
                model-opacity="1"
                cursor-listener >
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


      </a-entity>
    );
  }
}

export default Dementor;
