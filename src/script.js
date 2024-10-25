
//check the users device is a mobile device
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

// Add overlay effect on mouse move on desktop or laptop users
if(!isMobileDevice()) {
    document.addEventListener('mousemove', (e) => {
        const { innerWidth, innerHeight } = window;
        const xPercent = (e.pageX / innerWidth) * 100;
        const yPercent = (e.pageY / innerHeight) * 100;
    
        const overlayColor = 'rgba(29, 78, 216, 0.15)';
        const overlayElement = document.querySelector('.overlay');
        overlayElement.style.background = `radial-gradient(circle 600px at ${xPercent}% ${yPercent}%, ${overlayColor}, transparent 90%)`;
    
    });
}
