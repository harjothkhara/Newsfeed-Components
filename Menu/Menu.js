//article flip
TweenMax.staggerFrom(
  '.article',
  1,
  { rotation: 360, scale: 1, delay: 0.3 },
  0.8
);
// Toggle the "menu--open" class on your menu refence.
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  TweenMax.to('.menu', 0.5, { width: '190px', opacity: '1' }),
    TweenMax.to('.menu ul li', 0.5, { right: 30, delay: 1.5 });
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// console.log(menu);

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// console.log(menuButton);

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
// menuButton.addEventListener('click',() => toggleMenu());
