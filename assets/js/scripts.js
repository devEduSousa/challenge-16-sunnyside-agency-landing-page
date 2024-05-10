const hamburgerIconImg = document.querySelector('.hamburger-icon');
const menuMobileDiv = document.querySelector('.menu');
const optionsMobileLi = document.querySelectorAll('.menu li');

function selectItem(listOfElements) {
    listOfElements.forEach((element) => {
        element.addEventListener('click', () => {
            listOfElements.forEach((item) => {
                item.querySelector('.link').classList.remove('link-clicked');
            });
            element.querySelector('.link').classList.add('link-clicked');
        });
    });
};

function resetItens(listOfElements) {
    listOfElements.forEach((li, index) => {
        index !== 3 ? li.querySelector('.link').classList.remove('link-clicked') : li.querySelector('.link').classList.add('link-clicked');
    });
};

hamburgerIconImg.addEventListener('click', () => {
    menuMobileDiv.classList.toggle('hide-menu');
    if(!menuMobileDiv.classList.contains('hide-menu')) {
        resetItens(optionsMobileLi);
    };
});

optionsMobileLi.forEach(() => {
    selectItem(optionsMobileLi);
});