
// if (document.referrer.indexOf("$.html") === -1) {

//   window.location.href = "$.html";
// }

// window.onload = function () {
//   if (performance.navigation.type === 1) {

//     window.location.href = "$.html";
//   }
// };

function navigateToURL(url) {
    window.location.href = url;
}


// Navigate to another page and remove the last entry from the browsing history
function navigateToPage(url) {
    // Remove the last entry from the browsing history
    window.history.go(-1);

    // Navigate to the specified URL
    window.location.href = url;
}



window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    event.returnValue = '';
});

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode || localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

document.addEventListener('DOMContentLoaded', function () {
    let opacity = 0;

    function increaseBrightness() {
        if (opacity < 1) {
            opacity += 0.01;
            document.body.style.opacity = opacity;
            requestAnimationFrame(increaseBrightness);
        }
    }

    increaseBrightness();
});

document.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

document.addEventListener('mousemove', function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var backgroundEffect = document.querySelector('.background-effect');
    backgroundEffect.style.backgroundPositionX = -mouseX / 86 + 'px';
    backgroundEffect.style.backgroundPositionY = -mouseY / 86 + 'px';
});


//key
function submitForm() {
    var key = document.getElementById('keyInput').value;
    var target = document.getElementById('targetInput').value;

    if (key === '') {
        showResult('Enter the key');
        return; // Exit the function if the key is empty
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    replaceTargetValue(target);
                } else {
                    showResult('Invalid key');
                }
            } else {
                showResult('Error: ' + xhr.status);
            }
        }
    };

    xhr.open('POST', 'check_key.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('key=' + encodeURIComponent(key));
}


function replaceTargetValue(target) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    showResult('');
                    // Navigate to index.html
                    window.location.href = 'index';
                } else {
                    showResult('Failed to replace target value');
                }
            } else {
                showResult('Error: ' + xhr.status);
            }
        }
    };

    xhr.open('POST', 'replace_target.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('target=' + encodeURIComponent(target));
}

function showResult(message) {
    var resultElement = document.getElementById('result');
    resultElement.innerText = message;
    resultElement.style.color = 'red';

    if (message === 'Enter the key') {
        resultElement.innerText = message;
        resultElement.style.color = 'red';
        resultElement.style.marginRight = '245px';
        resultElement.style.whiteSpace = 'nowrap';
        resultElement.style.overflow = 'hidden';
        resultElement.style.textOverflow = 'ellipsis';
    } else if (message === 'Invalid key') {
        resultElement.innerText = message;
        resultElement.style.color = 'red';
        resultElement.style.marginRight = '265px';
        resultElement.style.whiteSpace = 'nowrap';
        resultElement.style.overflow = 'hidden';
        resultElement.style.textOverflow = 'ellipsis';
    } else {
        resultElement.style.marginRight = '';
    }
}


