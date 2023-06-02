
// if (document.referrer.indexOf("$.html") === -1) {

//   window.location.href = "$.html";
// }

// window.onload = function () {
//   if (performance.navigation.type === 1) {

//     window.location.href = "$.html";
//   }
// };

window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
  event.returnValue = '';
});

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode || localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

document.addEventListener('DOMContentLoaded', function() {
  let opacity = 0;

  function increaseBrightness() {
    if (opacity < 1) {
      opacity += 0.01;
      document.body.style.opacity = opacity;
      requestAnimationFrame(increaseBrightness);
    }
  }

  increaseBrightness();
});

document.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

document.addEventListener('mousemove', function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  
  var backgroundEffect = document.querySelector('.background-effect');
  backgroundEffect.style.backgroundPositionX = -mouseX / 86 + 'px';
  backgroundEffect.style.backgroundPositionY = -mouseY / 86 + 'px';
});









