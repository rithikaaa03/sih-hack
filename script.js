/*in tablet- click hamburger, we get to see navbar icons*/
const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');
/*if navbar is showing in screen or not*/
if (bar){  /*if hamburger shown is clicked*/
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close){  /*if hamburger shown is clicked*/
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
