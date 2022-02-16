const scrollContainer = document.querySelector('.scroll-container');
const scrollProgressMarkers = document.querySelectorAll('.scroll-progress__marker');

scrollContainer.addEventListener('scroll', function () {
  const stage = Math.floor(scrollContainer.scrollTop / scrollContainer.offsetHeight);
  scrollProgressMarkers.forEach((marker, i) => {
    i === stage
      ? marker.classList.add('scroll-progress__marker--active')
      : marker.classList.remove('scroll-progress__marker--active');
  });
});
