
export const THEME = {
  light: ["#969cff","#BBB"],
  dark: ['#0a0b33', "#0b1228"],
}
export const SPELLS = [{
  name: 'expectoPatronum',
  cameraSpot: '0 1 -3',
  label: 'expecto patronum',
  objects: ['#dementor1', '#dementor2'],
  callback: 'onDementorsDefeated'
},
  {
    name: 'alohomora',
    label: 'alohomora',
    cameraSpot: "-0.75 1 -20",
    objects: ['#door'],
    callback: 'onDoorOpen'
  },
  {
    name: 'lumos',
    label: 'lumos',
    cameraSpot: '-0.75 1 -38',
    objects: ['#candle'],
    callback: 'turnOnTheLights'
  },
  {
    name: 'avadaKedavra',
    label: 'avada kedavra',
    cameraSpot: '-0.75 1 -38',
    objects: ['#voldemort'],
    callback: 'onAvadaKedavra'
  },
  {
    name: 'expelliarmus',
    label: 'expelliarmus',
    cameraSpot: '-0.75 1 -38',
    objects: ['#voldemort'],
    callback: 'onAvadaKedavra'
  }]
