const globalImgSwitchLinkElements = document.querySelectorAll('.global-img-switch a');
const imgComparisonSliderElements = document.querySelectorAll('img-comparison-slider');

globalImgSwitchLinkElements.forEach((el) => {
  el.addEventListener('click', imgLinkSwitchClickHandler.bind(this));
});

function imgLinkSwitchClickHandler(e) {
  e.preventDefault();
  const exposure = (e.currentTarget.getAttribute('data-type') == 'sketch') ? 0 : 100;

  imgComparisonSliderElements.forEach((el) => {
    el.shadowRoot.querySelector('.first').setAttribute('style', '--exposure: '+ exposure +'%; --transition-time: 500ms;');
  });
}
