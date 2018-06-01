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
      voldemortVisible: false,
      recognizing: false,
      startedRecognizing: false
    }
    this.setCamera = this.setCamera.bind(this)
    this.levelUp = this.levelUp.bind(this)
    this.onDementorsDefeated = this.onDementorsDefeated.bind(this)
    this.onDoorOpen = this.onDoorOpen.bind(this)
    this.turnOffTheLights = this.turnOffTheLights.bind(this)
    this.turnOnTheLights = this.turnOnTheLights.bind(this)
    this.startRecognition = this.startRecognition.bind(this)
    this.initWebSpeech()
  }

  initWebSpeech() {
    this.recognition = new window.webkitSpeechRecognition()
    this.recognition.lang = 'en-US'
    this.recognition.interimResults = true
    this.recognition.maxAlternatives = 3
    this.recognition.onstart = () => {
      this.setState({
        recognizing: true
      })
      console.log('Listening...')
      document.querySelector('#hintbox').setAttribute('material', {
        color: 'darkgreen'
      });
    }
    this.recognition.onend = () => {
      this.setState({
        recognizing: false
      })
      document.querySelector('#hintbox').setAttribute('material', {
        color: 'maroon'
      });
      console.log('End of listenning...')
    }


    this.recognition.onresult = (ev) => {
      const theBestTranscript = ev.results[0][0].transcript
      document.querySelector('#hintbox').setAttribute('text', {
        value: theBestTranscript
      });
      if (theBestTranscript.includes('expecto patronum') && this.state.mission === 0) {
        document.querySelector('#dementor1').emit('expectoPatronum')
        document.querySelector('#dementor2').emit('expectoPatronum')
        this.onDementorsDefeated()
      } else if (theBestTranscript.includes('alohomora') && this.state.mission === 1) {
        document.querySelector('#door').emit('alohomora')
        this.onDoorOpen()
      } else if (theBestTranscript.includes('lumos') && this.state.mission === 2){
        document.querySelector('#candle').emit('lumos')
        this.turnOnTheLights()
      } else if (theBestTranscript.includes('avada kedavra') && this.state.mission === 3){
        document.querySelector('#voldemort').emit('avadaKedavra')
        this.onAvadaKedavra()
      }
    }
  }

  startRecognition(){

    if (this.state.recognizing === false) {
      this.recognition.start()
    }
  }

  onDementorsDefeated() {
    this.levelUp()
  }

  onDoorOpen() {
    this.levelUp()
    setTimeout(this.turnOffTheLights, 2000)
  }

  onAvadaKedavra() {
    this.levelUp()
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
        <Garden startRecognition={this.startRecognition}/>
        <Library startRecognition={this.startRecognition} turnOnTheLights={this.turnOnTheLights} voldemortVisible={this.state.voldemortVisible}/>
        <Camera setCamera={this.setCamera} nextSpot={nextSpot} activeSpot={activeSpot}/>
        <a-sky material={`color: ${activeTheme[0]}`}/>
        <a-light type="ambient" color={activeTheme[1]}/>
      </a-scene>
    );
  }
}

export default App;
