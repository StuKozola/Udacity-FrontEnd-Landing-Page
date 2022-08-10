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
    });
}

// Instantiate the navbar
buildNavBar();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active