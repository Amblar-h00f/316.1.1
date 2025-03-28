// Menu data structure
const menulinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];


/*const mainEl = typeof document !== 'undefined' 
  ? document.querySelector('main') 
  : null;*/


//DOM elements

const mainEl = document.querySelector('main');

const topMenuEl = document.getElementById('top-menu');

//style main element
mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

mainEl.classList.add('flex-ctr');

/*console.log(topMenuEl);*/ //style top menu

topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add('flex-around');


//create menu links
menulinks.forEach(link => {
  const aElement = document.createElement('a');
  aElement.href = link.href;
  aElement.textContent = link.text;
  aElement.classList.add('menu-link');
  aElement.setAttribute('aria-label', link.text);
  topMenuEl.appendChild(aElement);

});
