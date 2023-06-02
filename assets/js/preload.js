window.addEventListener('load', function() {
    var progress = document.querySelector('.progress');
    var progressBar = document.querySelector('.progress-bar');
    var preloadContent = document.getElementById('preload-content');
    var animationDuration = 1500;
    var fps = 60;
    var increment = 100 / (animationDuration / (1500 / fps));

    var width = 0;
    var interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(showContent, 500);
        } else {
            width += increment;
            progress.style.width = width + '%';
        }
    }, 1000 / fps);

    function showContent() {
        progressBar.style.display = 'none';
        preloadContent.style.display = 'block';
        preloadContent.style.opacity = '0';

        setTimeout(function() {
            preloadContent.style.transition = 'opacity 0.5s';
            preloadContent.style.opacity = '1';
        }, 100);
    }
});
