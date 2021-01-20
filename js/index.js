// Your code goes here

// WINDOW 
window.addEventListener('load', (event) => { // load event
    console.log('page is fully loaded', event);    
});


window.addEventListener('online', (event) => { //online event
    console.log('You are now connected to the network!', event)
})


window.addEventListener('offline', (event) => { // offline event
    console.log("The network connection has been lost.", event)
})

window.addEventListener('scroll', (event) => { //scroll event
    // console.log('You are scrolling!', event);
})


// HEADER
const mainNav = document.querySelector('.main-navigation');
mainNav.style.borderBottom = '1px solid lightgrey';

// H1
const logoHead = document.querySelector('.logo-heading');
logoHead.style.color = '#83e377'
logoHead.style.fontSize = '60px';


// NAV LINKS
const navLinks = document.querySelectorAll('a');
navLinks.forEach((link) => {
    link.style.color = '#14cc89';
    link.style.fontSize = '20px';
    link.style.fontFamily = 'monospace';

    link.addEventListener('click', (event) => { // click event
        console.log("You clikced the link!", event);
    })
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



// BUTTONS
const button = document.querySelector('.btn');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.style.backgroundColor = '#90f4cf';
    button.style.border = '1px solid #90f4cf';
    button.style.color = 'black';

    button.addEventListener('mouseenter', (event) => { //mouseenter event
        button.style.color = 'grey';
        console.log('entered button', event);

        setTimeout(function() {
            event.target.style.color = '';
        }, 100)
    }, );

    button.addEventListener('mouseleave', (event) => { //mouseleave event
        button.style.color = '#ffffff';
        console.log('left button', event);

        setTimeout(function() {
            event.target.style.color = '';
        }, 100)
    });

    button.addEventListener('mouseout', (event) => { //mouseout event
        button.style.color = 'black';
        console.log('mouse out!', event);

        setTimeout(function() {
            event.target.style.color = 'black';
        }, 100)
    }, false);
}, );



// IMG
const image = document.querySelector('img');
const images = document.querySelectorAll('img');

images.forEach((img) => {  
    img.addEventListener('error', (event) => { // error event
    console.log('Error', event)
})
})

// console.log(images);



// FOOTER
const footer = document.querySelector('.footer');
footer.style.backgroundColor = '#f6d88e';
footer.style.borderTop = '2px solid #f6d88e';


// FOOTER PARA
const footerP = document.querySelector('.footer p');
footerP.style.color = 'darkgrey';
footerP.style.fontSize = '20px';
