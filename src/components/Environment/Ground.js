import React from 'react'

export default props => (
  <a-plane id="ground"
           material="src:#groundTexture; repeat: 20 20"
           rotation="-90 0 0"
           position="0 -0.02 0"
           height="100"
           width="100"/>
);
