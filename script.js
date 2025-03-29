
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// DOM elements (single initialization)
const mainEl = document.querySelector('main');
const topMenuEl = document.getElementById('top-menu');
const subMenuEl = document.getElementById('sub-menu');

// Style main element
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

// Style top menu
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');
topMenuEl.style.position = 'relative';

// Style submenu (moved outside event handler)
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';
subMenuEl.style.display = 'none'; // Start hidden

// Create menu links (single loop)
menuLinks.forEach(link => {
  const aElement = document.createElement('a');
  aElement.href = link.href;
  aElement.textContent = link.text;
  aElement.classList.add('menu-link');
  aElement.setAttribute('aria-label', link.text);
  topMenuEl.appendChild(aElement);
});

// Single event listener with submenu logic
topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  const clickedElement = event.target.closest('a');
  if (!clickedElement) return;
  
  // Find matching menu link
  const linkText = clickedElement.textContent.toLowerCase();
  const menuItem = menuLinks.find(link => link.text === linkText);
  
  // Toggle submenu
  if (menuItem?.subLinks) {
    subMenuEl.innerHTML = ''; // Clear previous items
    
    // Create submenu links
    menuItem.subLinks.forEach(sublink => {
      const subA = document.createElement('a');
      subA.href = sublink.href;
      subA.textContent = sublink.text;
      subMenuEl.appendChild(subA);
    });
    
    subMenuEl.style.display = 'block';
  } else {
    subMenuEl.style.display = 'none';
  }
});