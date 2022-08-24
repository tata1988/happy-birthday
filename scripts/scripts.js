const buttonMen = document.querySelector('.header__button-gender_men');
const buttonWomen = document.querySelector('.header__button-gender_women');
const buttonsChangeText = document.querySelector('.header__button-change_text');
const buttonsChangeImage = document.querySelector('.header__button-change_image');
const cardImg = document.querySelector('.card__img');
const cardText = document.querySelector('.card__text');
const body = document.body;

const state = {
    gender: body.classList.contains('women') ? 'women' : 'men',
};

//ф-я для получения рандомного значения массива
const getRadomForArr = (arr) => {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
}

// ф-я чтоб код не повторялся 

const changeDOM = () => {
    if (state.photo.includes('black')) {
        cardText.style.color = '#fff';
    } else {
        cardText.style.color = '';
    }

    cardImg.src = `images/${state.photo}`;
    cardText.innerHTML = state.text.replaceAll('\n', '<br>');
};

const getData = () => fetch('db.json').then(response => response.json());


const getDataToCard = () => {
    getData().then(data => {
        state.text = getRadomForArr(data.text[state.gender]);
        state.photo = getRadomForArr(data.photo[state.gender]);
        changeDOM();
    });

}
console.log(state);
const changeToMen = () => {
    if (state.gender !== 'men') {
        body.classList.add('men');
        body.classList.remove('women');
        state.gender = 'men';
        getDataToCard();
    }
};

const changeToWomen = () => {
    if (state.gender !== 'women') {
        body.classList.add('women');
        body.classList.remove('men');
        state.gender = 'women';
        getDataToCard();
    }
};

const changeText = () => {
    getData().then(data => {
        state.text = getRadomForArr(data.text[state.gender]);
        changeDOM();
    });
};

const changeImage = () => {
    getData().then(data => {
        state.photo = getRadomForArr(data.photo[state.gender]);
        changeDOM();
    });
}

buttonMen.addEventListener('click', changeToMen);
buttonWomen.addEventListener('click', changeToWomen);
buttonsChangeText.addEventListener('click', changeText)
buttonsChangeImage.addEventListener('click', changeImage)
getDataToCard();