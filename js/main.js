const globalImgSwitchLinkElements = document.querySelectorAll('.global-img-switch a');
const imgComparisonSliderElements = document.querySelectorAll('img-comparison-slider');
const fullscreenToggleElements = document.querySelectorAll('.fullscreen-toggle');
let imgLinkSwitchClickTimeout = null;

globalImgSwitchLinkElements.forEach((el) => {
  el.addEventListener('click', imgLinkSwitchClickHandler.bind(this));
});

function imgLinkSwitchClickHandler(e) {
  e.preventDefault();
  const exposure = (e.currentTarget.getAttribute('data-type') == 'sketch') ? 0 : 100;

  imgComparisonSliderElements.forEach((el) => {
    const firstElement = el.shadowRoot.querySelector('.first');
    firstElement.style.setProperty('--exposure', exposure +'%');
    firstElement.style.setProperty('--transition-time', '500ms');
  });

  if (imgLinkSwitchClickTimeout != null) window.clearTimeout(imgLinkSwitchClickTimeout);

  imgLinkSwitchClickTimeout = window.setTimeout(imgLinkSwitchClickTimeoutHandler.bind(this), 500);
}

function imgLinkSwitchClickTimeoutHandler(e) {
  imgComparisonSliderElements.forEach((el) => {
    const firstElement = el.shadowRoot.querySelector('.first');
    firstElement.style.setProperty('--transition-time', 'var(--default-transition-time)');
  });
}

function removeLocationHash() {
  const noHashURL = window.location.href.replace(/#.*$/, '');
  window.history.replaceState('', document.title, noHashURL);
}

if (typeof location.hash !== 'undefined' && location.hash) {
  const targetElement = document.querySelector(location.hash);

  fullscreenToggleElements.forEach((el) => {
    el.checked = false;
  });

  if (targetElement && typeof targetElement.checked !== 'undefined') {
    targetElement.checked = true;
  }
}

fullscreenToggleElements.forEach((el) => {
  el.addEventListener('change', (e) => {
    if (e.target.checked) {
      location.hash = e.target.id;
    } else {
      removeLocationHash();
    }
  });
});
