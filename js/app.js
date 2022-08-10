/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBarMenu = document.querySelector('.navbar__menu');
const navBarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * 
 * Start Helper Functions
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the navbar
function buildNavBar() {
    // loop through the sections and create a list item for each one
    sections.forEach(section => {
        // add the list item to the navbar
        const listItem = document.createElement('li');
        // add the class of the section to the list item
        listItem.className = 'navbar__item';
        // add link to the section
        listItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        // add the list item to the navbar
        navBarList.appendChild(listItem);

        // add event listener to the list item for scrooling to the section
        scrollToSection(listItem, section);
    });
}

// Add class 'active' to section when near top of viewport
function addActiveClass(section) {
    // get the top of the section
    const sectionTop = section.getBoundingClientRect().top;
    // get the bottom of the section
    const sectionBottom = section.getBoundingClientRect().bottom;
    // get the top of the viewport
    const viewportTop = window.pageYOffset;
    // get the bottom of the viewport
    const viewportBottom = window.pageYOffset + window.innerHeight;
    // if the top of the section is within the viewport
    if (sectionTop >= viewportTop && sectionTop <= viewportBottom) {
        // add the class of 'active' to the section
        section.classList.add('active');
    } else {
        // remove the class of 'active' from the section
        section.classList.remove('active');
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(navBarItem, section) {
    navBarItem.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNavBar(); 

// Scroll to section on link click


// Set sections as active
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        addActiveClass(section);
    });
} );