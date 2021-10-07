(function() {
  let currentIndex = 0;
  const urlParams = new URLSearchParams(window.location.search);
  const loadFile = urlParams.get('loadFile');

  function showSample(index) {
    const sample = TALON_APPS[index];
    const currentSpan = document.getElementById('filename');
    const mainframe = document.getElementById('mainframe');

    currentSpan.innerHTML = sample;
    mainframe.src = '../apps/' + sample;
  }

  if (loadFile && TALON_APPS.indexOf(loadFile) > -1) {
    showSample(TALON_APPS.indexOf(loadFile));
  } else {
    showSample(currentIndex);

    setInterval(function() {
      currentIndex++;
      if (currentIndex >= TALON_APPS.length) {
        currentIndex = 0;
      }
      showSample(currentIndex);
    }, 10000);
  }
})();
