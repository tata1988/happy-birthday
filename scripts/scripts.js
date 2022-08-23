const buttonMen = document.querySelector('.header__button-gender_men');
const buttonWomen = document.querySelector('.header__button-gender_women');
const buttonsChangeText = document.querySelector('.header__button-change_text');
const buttonsChangeImage = document.querySelector('.header__button-change_image');
const body = document.body;

const state = {
    gender: body.classList.contains('women') ? 'women' : 'men',
};

const changeToMen = () => {
    if (state.gender !== 'men') {
        body.classList.add('men');
        body.classList.remove('women');
        buttonsChangeText.style.background = '#1178B2';
        buttonsChangeImage.style.background = '#1178B2';
        state.gender = 'men';
    }
};

const changeToWomen = () => {
    if (state.gender !== 'women') {
        body.classList.add('women');
        body.classList.remove('men');
        buttonsChangeText.style.background = '#C300C7';
        buttonsChangeImage.style.background = '#C300C7';
        state.gender = 'women';
    }
};

buttonMen.addEventListener('click', changeToMen);
buttonWomen.addEventListener('click', changeToWomen);