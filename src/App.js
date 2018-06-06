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
      startedRecognizing: false,
      doorOpen: false,
      voldemortKilled: false
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
      })
      SPELLS.forEach((spell, index)=>{
        if (theBestTranscript.includes(spell.label) && this.state.mission === index){
          spell.objects.forEach((obj)=>{
            document.querySelector(obj).emit(spell.name)
          })
          this[spell.callback]()
        }
      })
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
    this.setState({
      doorOpen: true
    })
  }

  onAvadaKedavra() {
    this.setState({
      voldemortKilled: true
    },
      this.levelUp()
    )

  }

  turnOffTheLights() {
    this.setState({
      lightsOn: false
    })
  }

  turnOnTheLights() {
    this.setState({
      lightsOn: true,
      voldemortVisible: true,
      nextMission: this.state.mission + 1
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
        <Garden open={this.state.doorOpen} startRecognition={this.startRecognition}/>
        <Library voldemortKilled={this.state.voldemortKilled} startRecognition={this.startRecognition} turnOnTheLights={this.turnOnTheLights} voldemortVisible={this.state.voldemortVisible}/>
        <Camera setCamera={this.setCamera} nextSpot={nextSpot} activeSpot={activeSpot}/>
        <a-sky material={`color: ${activeTheme[0]}`}/>
        <a-light type="ambient" color={activeTheme[1]}/>
      </a-scene>
    );
  }
}

export default App;
