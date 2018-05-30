import React, {Component} from 'react'

class Door extends Component {
  constructor() {
    super();
    this.alohomora = this.alohomora.bind(this)
    this.door = React.createRef();
  }

  alohomora() {
    this.door.current.emit('alohomora')
    setTimeout(()=>{this.props.onOpen()} , 4000)
  }

  render() {
    return (
      <a-entity cursor-listener ref={this.door} onClick={this.alohomora} rotation="0 0 0" scale="2.8 2.4 2"  position="0.2 -0.5 12">
        <a-entity id="door-model" collada-model="#door"
                  scale="0.5 0.5 0.5" rotation="0 0 0"></a-entity>
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
