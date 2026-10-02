window.addEventListener('load', function () {

    const header = document.querySelector('header');
    const mainText = document.querySelector('.mainText');
    const smallText = document.querySelector('.smallText');
    const buttons = document.querySelector('.buttons');
    const image = document.querySelector('.image');
    const partners = document.querySelector('.partners');


    function showElement(element, delay) {
        setTimeout(function () {
            element.classList.add('show');
        }, delay);
    }


    showElement(header, 300);
    showElement(mainText, 900);
    showElement(smallText, 1500);
    showElement(buttons, 2100);
    showElement(image, 2700);
    showElement(partners, 3300);

});