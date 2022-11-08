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
 * start with dynamic navigator
 * 
 */
// getting All sections in an Array & ul Element 
const sections = Array.from(document.getElementsByTagName("section"));
const menu = document.getElementById('navbar__list');

// Adding li and a with them attributes
for(let section of sections) {
    const listItem = document.createElement('li');
    const listItemLink = document.createElement('a');
    // using the section data-nav to fill the <a> tag
    listItemLink.textContent = section.dataset.nav;
    listItemLink.setAttribute('data-target',`${section.id}`);
    listItemLink.setAttribute('class', 'menu__link');
    // append a to the li
    listItem.appendChild(listItemLink);
    // append li to ul Element
    menu.appendChild(listItem);
}

// Add class 'active' to section & nav_bar item when near top of viewport
const anchors = document.querySelectorAll("ul li a");
window.addEventListener('scroll', () => {
    // loop through each section of the page
    // arrow function
    sections.forEach( section => {
        // distance from top in px
        const nearTop = section.getBoundingClientRect().top;
        // if nearTop < 300px then 
        // Set sections as active
        if (nearTop > -50 && nearTop < 400) {
            // Adding 'active' to nav_bar item 
            anchors.forEach(item => {
                item.classList.remove('active');
                if (item.dataset.target === section.id)
                    item.classList.add('active');
            })
            // Adding 'active' to section
            section.classList.add('your-active-class');
            // IF NOT remove the class
        } else {
            section.classList.remove('your-active-class');
        }
    });
});
// Scroll to anchor ID using scrollIntoView event
    document.addEventListener('click', function (event) {
        // if it is not List Item
        if (!event.target.matches('.menu__link')) return;
        // IF it is List Item
        event.preventDefault();
        const item = document.getElementById(event.target.dataset.target);
        item.scrollIntoView({behavior: 'smooth', block: "start"});
    });

/**
 * End  
 *
 */



