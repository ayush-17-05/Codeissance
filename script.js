const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn--close-modal')
const btnOpenModal = document.querySelectorAll('.btn--show-modal')

const openModal= function(e){
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal= function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnOpenModal.forEach(btn=>btn.addEventListener('click', openModal))

overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal)

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
})

document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

console.log(allSections);

document.getElementById('section--1')
const allButtons = document.getElementsByTagName('button')
console.log(allButtons)

const header=document.querySelector('header')
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML='We use cookies for improved functionality and user experience <button class="btn btn--close-cookie">Gotcha!</button>'
header.append(message)

const gotcha = document.querySelector('.btn--close-cookie');
gotcha.addEventListener('click', function(){
    // message.classList.add('hidden');
    message.remove();
})

message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+30+'px';

const scrollToBtn = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

scrollToBtn.addEventListener('click', function(e){
    const s1Dimensions = section1.getBoundingClientRect();
    console.log(s1Dimensions);
    window.scrollTo({
        left:s1Dimensions.left+window.pageXOffset,
        top: s1Dimensions.top+window.pageYOffset,
        behavior:'smooth'
    })
})

const randomInteger = (min,max) =>
    Math.floor(Math.random()*(max-min+1)+min);

const randomColor = () =>
    `rgb(${randomInteger(0,255)},${randomInteger(0,255)},${randomInteger(0,255)})`

// document.querySelector('.nav').addEventListener('click', function(){
//     this.style.backgroundColor=randomColor();
// })

// document.querySelectorAll('.nav__link').forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         document.querySelector(id).scrollIntoView({behavior:'smooth'});
//     })
// })

document.querySelector('.nav__links').addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'})
    }
})

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

tabsContainer.addEventListener('click', function(e){
    const clicked = e.target.closest('.operations__tab');
    if(!clicked) return;
    tabs.forEach(t=>t.classList.remove('operations__tab--active'))
    clicked.classList.add('operations__tab--active');
    tabsContent.forEach(t=>t.classList.remove('operations__content--active'))
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

const nav = document.querySelector('nav')
const init = section1.getBoundingClientRect();

window.addEventListener('scroll', function(){
    if(this.scrollY>init,top){
        nav.classList.add('sticky');
    }
})