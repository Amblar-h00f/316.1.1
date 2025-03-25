              

const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>DOM Manipulation</h1>' , 

mainEl.classList.add('flex-ctr', 'another-class');

let topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl);
    
topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

mainEl.classList.add('flex-around');


// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  menuLinks.forEach((Link) =>{

let newLink = document.createElement('a');
newLink.setAttribute('href', Link.href)
newLink.textcontent = Link.text;
topMenuEl.appendChild(newLink);


console.log(newLink);

  });