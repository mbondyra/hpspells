class SpeechRecognition {
  constructor(onStart, onEnd, onResult){
    this.recognition = new window.webkitSpeechRecognition()
    this.recognition.lang = 'en-US'
    this.recognition.interimResults = true
    this.recognition.maxAlternatives = 3
    this.recognition.onstart = onStart
    this.recognition.onend = onEnd
    this.recognition.onresult = onResult
  }
  start(){
    this.recognition.start()
  }
}

export default SpeechRecognition
