import React, {Component} from 'react'

class Camera extends Component {

  constructor() {
    super()
    this.camera = React.createRef();
    this.state = {
      spot: null
    }
  }

  componentDidUpdate() {
    if (this.props.nextSpot) {
      this.camera.current.emit('nextSpot')
      setTimeout(() => {
        this.props.setCamera()
        this.camera.current.emit('spotSetup')
      }, 3000)
    }
  }

  render() {
    return <a-entity id="camera"
                     ref={this.camera}
                     position={this.props.activeSpot}>
      <a-camera look-controls-enabled="true"
                wasd-controls-enabled="true">
        <a-entity cursor="fuse: true; fuseTimeout: 1000"
                  raycaster="interval: 2000"
                  position="0 0 -1"
                  geometry="primitive: ring;
                         radiusInner: 0.02;
                         radiusOuter: 0.03"
                  material="color: white; shader: flat">
        </a-entity>
        <a-entity id="hintbox"
                  geometry="primitive:plane; height:0.1; width:0.8"
                  position="0.0 -0.35 -0.5"
                  material="color:maroon; opacity:0.8"
                  text="width:0.5; align:center; wrapCount:15; color:white">
        </a-entity>
      </a-camera>
      {this.props.nextSpot &&
      <a-animation attribute="position"
                   dur="3000"
                   from={this.props.activeSpot}
                   to={this.props.nextSpot}
                   easing="ease-in"
                   direction="alternate"
                   begin="nextSpot"
                   end="spotSetup"
                   fill="forwards">
      </a-animation>
      }
    </a-entity>
  }
}
export default Camera