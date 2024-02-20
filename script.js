//slides with product photos and features//

const slides = document.querySelector('.slides');
const slideLength = slides.querySelectorAll('article').length;
const articles = slides.querySelectorAll('article');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let index = 0;

nextBtn.addEventListener('click', ()=> changeSlide ('right'));
prevBtn.addEventListener('click', ()=> changeSlide ('left'));

const changeSlide = (dir) => {
    const sliderWidth = slides.clientWidth
    if(dir === 'right') {
        index++
        if(index > slideLength - 1) {
            index = 0
        }
    } else if(dir === 'left') {
        index--
        if(index < 0) {
            index = slideLength - 1
        }
}
for(let article of articles){
    article.style.transform = `translateX(-${index * sliderWidth}px)`;
}
};


//contact form modal pop-up//

const contact = document.querySelector('#contactBtn');
const modal=document.querySelector('.modal');
const boxBtn= document.querySelector('.boxBtn');

contact.addEventListener('click', contactPopUp);
boxBtn.addEventListener('click', modalClose);

function contactPopUp(){
    modal.classList.remove('hide');
}

function modalClose(){
    modal.classList.add('hide');
}

//form submission//

const form = document.querySelector('#contactForm');
const submitBtn = document.querySelector('.submit');

form.addEventListener('submit', async function (e){
  e.preventDefault();
});