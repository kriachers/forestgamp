let navLink = document.querySelector(".nav__link");
let subOneMenu = document.querySelector(".nav__link + .sub-menu");
let subMenu = document.querySelector(".sub-menu")
let navAreas = document.querySelector(".nav__areas");
let subMenuAreas = document.querySelector(".sub-menu-areas");
// let subMenuActiveAreas = document.querySelector(".sub-menu-areas.active");

navAreas.addEventListener('mouseover', function(){
    subMenuAreas.classList.add('active');
})

subMenuAreas.addEventListener('mouseover', function () {
    subMenuAreas.classList.add('active');
})

navAreas.addEventListener('mouseout', function () {
    subMenuAreas.classList.remove('active');
})

subMenuAreas.addEventListener('mouseout', function () {
    subMenuAreas.classList.remove('active');
})



// PARALLAX

let layer = document.querySelectorAll('.layer');


function parallax(event) {
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateY(${event.clientY*speed/1000}px)`
   });
}

document.addEventListener('mousemove', parallax);

// MAP

let mapItem = document.querySelectorAll('.map-svg');
let box = document.querySelector('.box'); 
let boxFirst = document.querySelector('.box-first');


// document.querySelectorAll('.map-part-first').forEach(item => {
//     item.addEventListener('mouseover', function (evt) {
//         box.style['top'] = '50px';
//         box.style['left'] = '100%';
//         box.classList.add('active');
//         })
//     item.addEventListener('mouseout', function () {
//         box.classList.remove('active');
//     })
//     })


// для обдного класса
// mapPartFirst = document.querySelector('.map-part-first');
// mapPartFirst.addEventListener('mouseover', 
// function (item) {
//         box.classList.add('active');
//         box.style['top'] = '50px';
//         box.style['left'] = '100%';
//     })
//     mapPartFirst.addEventListener('mouseout', function () {
//         box.classList.remove('active');
//     })


// для нескольких классов (цифра + svg)
// ПЕРВЫЙ КЛАСС

document.querySelectorAll('.map-part-first').forEach(item => {
item.addEventListener('mouseover',
    function (evt) {
        boxFirst.classList.add('active');
        // boxFirst.style['top'] = '50px';
        // boxFirst.style['left'] = '100%';
    })
item.addEventListener('mouseout', function () {
    boxFirst.classList.remove('active');
})
})

boxFirst.addEventListener('mouseover',
    function () {
        boxFirst.classList.add('active')
    })

boxFirst.addEventListener('mouseout', function () {
    boxFirst.classList.remove('active');
})
