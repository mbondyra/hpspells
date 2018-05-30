import React from 'react'

const THEME = {
  light: ["#969cff","#BBB"],
  dark: ['#0a0b33', "#2b354c"],
}

export default ({lightsOn}) => {
  const nonactiveTheme = lightsOn ? THEME.dark :THEME.light
  const activeTheme = lightsOn ? THEME.light : THEME.dark

  return (
    <a-entity>
      <a-sky
        material={`color: ${activeTheme[0]}`}>
      </a-sky>
      <a-entity light={`color: ${activeTheme[1]}; type:ambient`} data-aframe-default-light="" aframe-injected="">
      </a-entity>
    </a-entity>
  );
}
