import React, {Component} from 'react'
import Dementor from './Dementor'
import Door from './Door'

class Garden extends Component {

  constructor(){
    super()
    this.state={
      defeated: 0
    }
    this.onDementorsDefeated = this.onDementorsDefeated.bind(this)
  }
  onDementorsDefeated(){
    this.setState({
      defeated: this.state.defeated+1
    })
    if (this.state.defeated===2){
      this.props.onDementorsDefeated()
    }
  }

  render(){
    return <a-collada-model id="garden-model" src="#garden" position="1 0 -13" rotation="0 180 0">
      <Dementor onDefeat={this.onDementorsDefeated} position="-3 1 -4" rotation="90 -30 0" to="0 1 -7" runTo="-30 40 100"/>
      <Dementor onDefeat={this.onDementorsDefeated}  position="5 1 -4" rotation="90 30 0" to="2 1 -7" runTo="50 40 100"/>
      <Door onOpen={this.props.onOpen}/>
    </a-collada-model >
  }
};
export default Garden
