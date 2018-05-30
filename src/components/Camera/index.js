import React, {Component} from 'react'


class Camera extends Component {

  constructor(){
    super()
    this.camera = React.createRef();
    this.state={
      spot: null
    }
  }
  componentDidUpdate(){
    if (this.props.nextSpot){
      this.camera.current.emit('nextSpot')
      setTimeout(()=>{
        this.props.setCamera()
        this.camera.current.emit('spotSetup')
      }, 3000)
    }
  }

  render() {
    return <a-entity
      id="camera"
      ref={this.camera}
      camera=""
      look-controls=""
      wasd-controls=""
      position={this.props.activeSpot}
    >
      {this.props.nextSpot &&
      <a-animation
        attribute="position"
        dur="3000"
        from={this.props.activeSpot}
        to={this.props.nextSpot}
        easing="ease-in"
        direction="alternate"
        begin="nextSpot"
        end="spotSetup"
        fill="forwards"
      ></a-animation>
      }
      <a-entity cursor="fuse: true; fuseTimeout: 1000"
                position="0 0 -1"
                geometry="primitive: ring;
                radiusInner: 0.02;
                radiusOuter: 0.03"
                material="color: white; shader: flat"
      >
      </a-entity>


    </a-entity>
  }
}
export default Camera