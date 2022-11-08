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
// Creat 4 List Elements
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");
const listItem3 = document.createElement("li");
const listItem4 = document.createElement("li");
// get all sections on the page
const sectionsss = document.querySelectorAll('section');
// new after feedback:
const sections = Array.from(document.getElementsByTagName("section"));
const menu = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Set attribute for all List Elements
// listItem1.setAttribute('class','menu__link');
// listItem2.setAttribute('class','menu__link');
// listItem3.setAttribute('class','menu__link');
// listItem4.setAttribute('class','menu__link');
// new after feedback:

for(let section of sections) {
    const listItem = document.createElement('li');
    const listItemLink = document.createElement('a');
    // comment here
    listItemLink.textContent = section.dataset.nav;
    listItem.appendChild(listItemLink);
    menu.appendChild(listItem);
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// add innerHtml to all List Elements
listItem1.innerHTML = "<a class='list list1' data-target='section1'>Section 1</a>";
listItem2.innerHTML = "<a class='list list2' data-target='section2'>Section 2</a>";
listItem3.innerHTML = "<a class='list list3' data-target='section3'>Section 3</a>";
listItem4.innerHTML = "<a class='list list4' data-target='section4'>Section 4</a>";
// select nav bar to append List Elements to it
const selector = document.getElementById(`navbar__list`);

// build the nav
selector.appendChild(listItem1);
selector.appendChild(listItem2);
selector.appendChild(listItem3);
selector.appendChild(listItem4);

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', (e) => {
    // loop through each section of the page
    // arrow function
    sections.forEach( section => {
        // distance from top in px
        const nearTop = section.getBoundingClientRect().top;
        // if nearTop < 300px then 
        // Set sections as active
        if (nearTop > 0 && nearTop < 300) {
            section.classList.add('your-active-class');
            // IF NOT remove the class
        } else {
            section.classList.remove('your-active-class');
        }
    });
});

// Scroll to anchor ID using scrollTO event
document.addEventListener('click',function (event) {
        // if it is not List Item
        if (!event.target.matches('.list')) return;
        // IF it is List Item
        event.preventDefault();
        const item = document.getElementById(event.target.dataset.target);
        item.scrollIntoView({behavior: 'smooth', block: "start"});
    });
/**
 * End Main Functions
 *
 */



