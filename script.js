document.addEventListener('DOMContentLoaded', function () {
    // Initialize Simple Parallax
    var image = document.querySelector('.parallax-img');
    if (image) {
        new simpleParallax(image, {
            scale: 1.3
        });
    }

    // Confetti celebration
    var celebrateBtn = document.getElementById('celebrate-btn');
    if (celebrateBtn) {
        celebrateBtn.addEventListener('click', function () {
            confetti({
                particleCount: 200,
                spread: 60,
                origin: { y: 0.6 }
            });
        });
    }
   
    celebrateBtn.click();

});