import React from 'react'
import carpet from './images/carpet.jpg'
import grass from './images/grass.jpg'
import wall from './images/wall.jpg'
import floor from './images/floor.jpg'

export default () => (
  <a-assets>
    <img alt="" crossOrigin="anonymous" id="groundTexture" src={grass}/>
    <img alt="" id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
    <img alt="" id="carpet" src={carpet}/>
    <img alt="" id="wall" src={wall}/>
    <img alt="" id="floor" src={floor}/>
{/*
    <a-asset-item id="hall" src='./models/sala/model.dae'></a-asset-item>*/}

    <a-asset-item id="garden" src='./models/jardin/model.dae'></a-asset-item>
    <a-asset-item id="dementor" src='./models/dementor/model.dae'></a-asset-item>
    <a-asset-item id="door" src='./models/door/model.dae'></a-asset-item>

      <a-asset-item id="biblioteca" src='./models/biblioteca/model.dae'></a-asset-item>
      <a-asset-item id="candle" src='./models/candle.dae'></a-asset-item>

  </a-assets>
)