window.addEventListener('load', function() {
    var progress = document.querySelector('.progress');
    var progressBar = document.querySelector('.progress-bar');
    var preloadContent = document.getElementById('preload-content');

    // Set the animation duration in milliseconds
    var animationDuration = 2000; // 2 seconds

    // Calculate the animation increment based on the animation duration and desired FPS
    var fps = 60; // Frames per second
    var increment = 100 / (animationDuration / (1000 / fps));

    // Animate progress bar
    var width = 0;
    var interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            // After animation is complete, show the content
            setTimeout(showContent, 500); // Delay the showContent function by 500 milliseconds
        } else {
            width += increment;
            progress.style.width = width + '%';
        }
    }, 1000 / fps);

    function showContent() {
        // Hide the progress bar
        progressBar.style.display = 'none';

        // Show the content with a slide-down effect
        preloadContent.style.display = 'block';
        preloadContent.style.opacity = '0';

        setTimeout(function() {
            preloadContent.style.transition = 'opacity 0.5s';
            preloadContent.style.opacity = '1';
        }, 100);
    }
});
