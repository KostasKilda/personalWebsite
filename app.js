const textChange = document.querySelector('#changing-text');
const phrases = ['creating websites', 'writting custom scripts', 'fresh air', 'video games', 'studying',];

// starts the changing text sequence
let index = 0;
waitTimer(index);

function deleteText(index) {
    let i = textChange.innerText.length;

    let clearText = setInterval(function () {
        if (i == 0) {
            clearInterval(clearText);
            newTextLine(index);
        }
        else {
            textChange.innerText = textChange.innerText.slice(0, -1);
            i--;
        }
    }, 100)
}



function newTextLine(index) {
    let i = 0;
    let spaceIndex = 0;
    let newWord = setInterval(function () {
        if (index == phrases.length) {
            index = 0;
        }

        if (phrases[index][i] == ' ') {
            spaceIndex++;
        }
        else if (spaceIndex > 0) {
            textChange.innerText = textChange.innerText + '=';
            textChange.innerText = textChange.innerText + phrases[index][i];
            textChange.innerText = textChange.innerText.replace('=', ' ');
            spaceIndex = 0;
        }
        else {
            textChange.innerText = textChange.innerText + phrases[index][i];
        }

        i++;
        if (i == phrases[index].length) {
            clearInterval(newWord);
            index++;
            waitTimer(index);
        }
    }, 150)
}


function waitTimer(index) {
    let i = 0;
    let timer = setInterval(function () {
        if (i == 8) {
            clearInterval(timer);
            deleteText(index);
        }
        else if (i % 2 == 1) {
            textChange.innerText = textChange.innerText.replace(/.$/, '');
        }
        else {
            textChange.innerText = textChange.innerText + '_';
        }

        i++;
    }, 750)
}


// Navbar javaScript

const hamburger = document.querySelector('.navbar-hamburger');
const navbarAnchor = document.querySelectorAll('.navbar-anchor');
const navbarListMobile = document.querySelector('.navbar-hidden-mobile');
const navbarList = document.querySelector('.navbar-links');
let mobileMenu = 0;

hamburger.addEventListener('click', function () {
    if (mobileMenu % 2 == 0) {
        mobileMenu++;
        for (let i = 0; i < navbarAnchor.length; i++) {
            navbarAnchor[i].style.display = 'inline-block';
        }
        setTimeout(function () {
            for (let i = 0; i < navbarAnchor.length; i++) {
                setTimeout(function () {
                    if (navbarAnchor[i].style.display != 'none') {
                        navbarAnchor[i].style.transition = '0.5s';
                        navbarAnchor[i].style.transform = 'translateY(0)';
                    }
                }, 50 + i * 50);
            }
        }, 200);
    }
    else {
        for (let i = 0; i < navbarAnchor.length; i++) {
            navbarAnchor[i].style.display = 'none';
            navbarAnchor[i].style.transition = '0s';
            navbarAnchor[i].style.transform = 'translateX(-100vw)';
        }
        mobileMenu++;
    }
    navbarListMobile.classList.toggle('navbar-links-toggle');
});


window.addEventListener("load", function () {
    window.dispatchEvent(new Event('resize'));
});

window.onresize = function () {
    if (window.innerWidth >= 896) {
        if (navbarListMobile.classList[1] == 'navbar-links-toggle') {
            navbarListMobile.classList.toggle('navbar-links-toggle');
            mobileMenu = 0;
        }
        for (let i = 0; i < navbarAnchor.length; i++) {
            navbarAnchor[i].style.display = 'inline-block';
            navbarAnchor[i].style.transform = 'translateY(0)';
        }
    } else {
        if (mobileMenu % 2 == 0) {
            for (let i = 0; i < navbarAnchor.length; i++) {
                navbarAnchor[i].style.display = 'none';
                navbarAnchor[i].style.transform = 'translateX(-100vw)';
            }
        }
    }
}