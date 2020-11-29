const bg = document.querySelector('#bg');
const moon = document.querySelector('#moon');
const road = document.querySelector('#road');
const mountain = document.querySelector('#mountain');
const text = document.querySelector('.text');
const title = document.querySelector('.title');
const div_height = document.getElementById('di').clientHeight;
const title_absolute = document.getElementById('ti').offsetTop;
window.addEventListener('scroll', function () {
    const title_absolute = document.getElementById('ti').offsetTop - div_height/2.0;
     //alert(title_absolute+"  "+div_height)
    const value = window.scrollY;
    title.style.bottom = (value - 300) +'px';
    var step = div_height
    if(value >= step) {
        bg.style.top = (value-step) * 0.5 + 'px';
        moon.style.left = -(value-step) * 0.35 + 'px';
        mountain.style.top = -(value-step) * 0.15 + 'px';
        road.style.top = (value-step) * 0.15 + 'px';
        text.style.top = (value-step) * 1 + 'px';
    }
})
