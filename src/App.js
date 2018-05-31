import React, {Component} from 'react'
import Assets from './components/Assets'
import Environment from './components/Environment'
import Camera from './components/Camera'
import Garden from './components/Garden'
import Library from './components/Library'
import {THEME, SPELLS} from './constants'

class App extends Component {
  constructor() {
    super();
    this.state = {
      mission: 0,
      nextMission: null,
      lightsOn: true,
      voldemortVisible:false
    }
    this.setCamera = this.setCamera.bind(this)
    this.levelUp = this.levelUp.bind(this)
    this.onDementorsDefeated = this.onDementorsDefeated.bind(this)
    this.onDoorOpen = this.onDoorOpen.bind(this)
    this.turnOffTheLights = this.turnOffTheLights.bind(this)
    this.turnOnTheLights = this.turnOnTheLights.bind(this)
  }

  onDementorsDefeated() {
    this.levelUp()
  }

  onDoorOpen() {
    this.levelUp()
    setTimeout(this.turnOffTheLights, 2000)
  }

  turnOffTheLights() {
    this.setState({
      lightsOn: false
    })
  }

  turnOnTheLights() {
    this.setState({
      lightsOn: true,
      voldemortVisible: true
    })
  }

  levelUp() {
    this.setState({nextMission: this.state.mission + 1})
  }

  setCamera() {
    if (this.state.nextMission) {
      this.setState({
        mission: this.state.nextMission,
        nextMission: null
      })
    }
  }

  render() {
    const nextSpot = this.state.nextMission && SPELLS[Math.min(this.state.nextMission, 4)] && SPELLS[Math.min(this.state.nextMission, 4)].cameraSpot
    const activeSpot = SPELLS[Math.min(this.state.mission, 4)].cameraSpot
    const activeTheme = this.state.lightsOn ? THEME.light : THEME.dark
    return (
      <a-scene>
        <Assets />
        <Environment />
        <Garden onDementorsDefeated={this.levelUp} onOpen={this.onDoorOpen}/>
        <Library turnOnTheLights={this.turnOnTheLights} voldemortVisible={this.state.voldemortVisible}/>
        <Camera setCamera={this.setCamera}
                nextSpot={nextSpot}
                activeSpot={activeSpot}/>
        <a-sky material={`color: ${activeTheme[0]}`}/>
        <a-light type="ambient" color={activeTheme[1]}/>
      </a-scene>
    );
  }
}

export default App;
