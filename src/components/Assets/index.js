import React from 'react'
import grass from './images/grass.jpg'

export default () => (
  <a-assets timeout="30000">

      <a-asset-item id="groundTexture" src={grass}></a-asset-item>
      <a-asset-item id="garden" src='./models/jardin/model.dae'></a-asset-item>

      <a-asset-item id="hall" src='./models/sala/model.dae'></a-asset-item>
      <a-asset-item id="dementor-obj" src='./models/dementor/Dementor.obj'></a-asset-item>
      <a-asset-item id="dementor-mtl" src='./models/dementor/Dementor.mtl'></a-asset-item>
      <a-asset-item id="door" src='./models/door/model.dae'></a-asset-item>
      <a-asset-item id="biblioteca" src='./models/biblioteca/model.dae'></a-asset-item>
      <a-asset-item id="candle" src='./models/candle.dae'></a-asset-item>
      <a-asset-item id="voldemort" src='./models/voldemort/model.dae'></a-asset-item>
  </a-assets>

)