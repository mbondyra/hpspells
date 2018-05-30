import React, {Component} from 'react'
import Dementor from './Dementor'
import Door from './Door'

class Garden extends Component {

  constructor(){
    super()
    this.state={
      defeated: 0
    }
  }

  render(){
    return <a-collada-model id="garden-model" src="#garden" position="1 0 -13" rotation="0 180 0">
      <Dementor id="dementor1" startRecognition={this.props.startRecognition} position="-3 1 -4" rotation="90 -30 0" to="0 1 -7" runTo="-30 40 100"/>
      <Dementor id="dementor2" startRecognition={this.props.startRecognition} position="5 1 -4" rotation="90 30 0" to="2 1 -7" runTo="50 40 100"/>
      <Door open={this.props.open} startRecognition={this.props.startRecognition}  onOpen={this.props.onOpen}/>
    </a-collada-model >
  }
};
export default Garden
