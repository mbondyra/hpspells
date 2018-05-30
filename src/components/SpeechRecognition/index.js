var recognition = new speechRecognition()
recognition.lang = 'en-US'
recognition.interimResults = true
recognition.maxAlternatives = 3


recognition.onstart = () => { console.log('Listening...') }
recognition.onresult = (ev) => { console.log(ev.results[0][0].transcript) }
recognition.onend = () => { console.log('I am not listening anymore!') }

const dementor = document.querySelector('#dementor')
dementor.addEventListener('click', () => {
  recognition.start()
})

recognition.onresult = (ev) => {
  const theBestTranscript = ev.result[0][0].transcript
  resultbox.setAttribute('text', {
    value: theBestTranscript
  });
  if (theBestTranscript.includes('expecto patronum')){
    dementor.emit('expectoPatronum')
  }
}
