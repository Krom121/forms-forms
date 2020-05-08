document.querySelector('.banner_btn').addEventListener('click', () => {
    // hide banner on click of button
    document.querySelector('.banner').style.display = 'none';
    // show form
    document.querySelector('.form_container').style.cssText = 'opacity: 1; visibility: visible';
    // change background
    document.querySelector('.container').style.background = '#cc683c'

});

/// close button
document.querySelector('.x_btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'flex';
    // hide form
    document.querySelector('.form_container').style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.container').style.cssText = '    background:linear-gradient(rgba(0,0,0, .8),rgba(0,0,0, .7)), url(/img/bg1.jpeg); background-size: cover';
});