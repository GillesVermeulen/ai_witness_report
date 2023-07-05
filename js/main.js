const globalImgSwitchLinkElements = document.querySelectorAll('.global-img-switch a');
const imgComparisonSliderElements = document.querySelectorAll('img-comparison-slider');
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
