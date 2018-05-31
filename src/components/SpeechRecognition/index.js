const recognition = new window.webkitSpeechRecognition()
recognition.lang = 'en-US'
recognition.interimResults = true
recognition.maxAlternatives = 3
let recognizing = false;
recognition.onstart = () => {
  console.log('Listening...')
  document.querySelector('#hintbox').setAttribute('material', {
    color: 'darkgreen'
  });
  recognizing = true
}
recognition.onend = () => {
  document.querySelector('#hintbox').setAttribute('material', {
    color: 'maroon'
  });
  recognizing = false
}

window.startRecognition = () => {
  if (recognizing === false) {
    recognition.start()
  }
}

recognition.onresult = (ev) => {
  const theBestTranscript = ev.results[0][0].transcript
  document.querySelector('#hintbox').setAttribute('text', {
    value: theBestTranscript
  });
  if (theBestTranscript.includes('expecto patronum')) {
    document.querySelector('#dementor1').emit('expectoPatronum')
    document.querySelector('#dementor2').emit('expectoPatronum')
  } else if (theBestTranscript.includes('alohomora')) {
    document.querySelector('#door').emit('alohomora')
  } else if (theBestTranscript.includes('lumos')){
    document.querySelector('#lamp').emit('lumos')
  } else if (theBestTranscript.includes('avada kedavra')){
    document.querySelector('#voldemort').emit('avadaKedavra')
  }
}

window.recognition = recognition