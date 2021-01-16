// Your code goes here

// WINDOW 
window.addEventListener('load', (event) => { // load event
    console.log('page is fully loaded');
});


window.addEventListener('online', (event) => { //online event
    alert('You are now connected to the network!')
})


window.addEventListener('offline', (event) => { // offline event
    console.log("The network connection has been lost.")
})


// H1
const logoHead = document.querySelector('.logo-heading');
logoHead.style.color = '#00cecb'
logoHead.style.fontSize = '55px';
// console.log('logo-head', logoHead);


// NAV LINKS
const navLinks = document.querySelectorAll('a');
navLinks.forEach((link) => {
    link.style.color = '#8f8f8f';
    link.style.fontSize = '20px';
    link.style.fontFamily = 'monospace';
});


// HEADER IMG 
const busImg = document.querySelector('.intro img');
busImg.style.marginTop = '3em';
busImg.style.borderRadius = '20px'
busImg.style.animation

busImg.addEventListener('mouseover', (event) => { //mouseover event
    event.target.style.border = '6px dotted red';

    setTimeout(function() {
        event.target.style.border = '';
    }, 200)
}, false);



// IMG / TEXT CONTENT 

const imgCon = document.querySelector('.img-content');
const textCon = document.querySelector('.text-content');

imgCon.addEventListener
