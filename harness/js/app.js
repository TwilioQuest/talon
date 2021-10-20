(function() {
  let currentIndex = 0;
  const urlParams = new URLSearchParams(window.location.search);
  const loadFile = urlParams.get('loadFile');

  const currentSpan = document.getElementById('filename');
  const mainframe = document.getElementById('mainframe');

  function showSample(index) {
    const sample = TALON_APPS[index];
    currentSpan.innerHTML = sample;
    mainframe.src = '../apps/' + sample;
  }

  if (loadFile) {
    currentSpan.innerHTML = loadFile;
    mainframe.src = '../apps/' + loadFile;
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
