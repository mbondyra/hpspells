window.AFRAME.registerComponent('cursor-listener', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      console.log('I was clicked');
    });
  }
});
window.AFRAME.registerComponent('raycaster-autorefresh', {
  init: function () {
    var el = this.el;
    this.el.addEventListener('model-loaded', function () {
      var cursorEl = el.querySelector('[raycaster]');
      cursorEl.components.raycaster.refreshObjects();
    });
  }
});