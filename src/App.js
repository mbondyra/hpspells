import React, {Component} from 'react'
import Assets from './components/Assets'
import Environment from './components/Environment'
import Camera from './components/Camera'
import Garden from './components/Garden'
import Library from './components/Library'
import Sky from './components/Sky'

const SPELLS = [{
  name: 'expectoPatronum',
  cameraSpot: '0 1.5 -3',
  label: 'expecto patronum',
},
  {
    name: 'alohomora',
    label: 'alohomora',
    cameraSpot: "-0.75 1.5 -20",
  },
  {
    name: 'lumos',
    label: 'lumos',
    cameraSpot: '-0.75 1.5 -38',
  },
  {
    name: 'avadaKedavra',
    label: 'avada kedavra',
    cameraSpot: '-0.75 1.5 -38',
  },
  {
    name: 'expelliarmus',
    label: 'expelliarmus',
    cameraSpot: '-0.75 1.5 -38',
  }]

class App extends Component {
  constructor() {
    super();
    this.state = {
      mission: 0,
      nextMission: null,
      loaded: false,
      lightsOn: true
    }
    this.setCamera = this.setCamera.bind(this)
    this.levelUp = this.levelUp.bind(this)
    this.onLoaded = this.onLoaded.bind(this)
    this.onDementorsDefeated = this.onDementorsDefeated.bind(this)
    this.onDoorOpen = this.onDoorOpen.bind(this)
    this.turnOffTheLights = this.turnOffTheLights.bind(this)
    this.turnOnTheLights = this.turnOnTheLights.bind(this)
  }

  onDementorsDefeated(){
    this.levelUp()
  }

  onDoorOpen(){
    this.levelUp()
    setTimeout(this.turnOffTheLights, 2000)
  }
  turnOffTheLights(){
    console.log('lightsOff')
    this.setState({
      lightsOn: false
    })
  }


  turnOnTheLights(){
    console.log('lightsOn')
    this.setState({
      lightsOn: true
    })
  }
  levelUp() {
    this.setState({nextMission: this.state.mission + 1})
  }

  onLoaded() {
    this.setState({loaded: true})
  }

  setCamera() {
    if (this.state.nextMission){
      this.setState({
        mission: this.state.nextMission,
        nextMission: null
      })
    }
  }

  render() {

    const nextSpot = this.state.nextMission && SPELLS[Math.min(this.state.nextMission, 4)] && SPELLS[Math.min(this.state.nextMission, 4)].cameraSpot
    const activeSpot = SPELLS[Math.min(this.state.mission, 4)].cameraSpot

    console.log("mission", this.state.mission)
    return (
      <a-scene loaded={this.onLoaded} light="defaultLightsEnabled: false" raycaster-autorefresh>
        <Assets />

        <a-entity>
          <Environment />
          { this.state.mission < 2 &&
            <Garden onDementorsDefeated={this.levelUp} onOpen={this.onDoorOpen}/>
          }
          {
            this.state.mission > 0 &&
            <Library turnOnTheLights={this.turnOnTheLights}/>
          }
          <Sky lightsOn={this.state.lightsOn}/>
          <Camera setCamera={this.setCamera}
                  nextSpot={nextSpot}
                  activeSpot={activeSpot}></Camera>
        </a-entity>


      </a-scene>
    );
  }
}

export default App;
