import './styles.css';

function header() {
    const element = document.createElement('div');
    element.classList.add('header');

    const btnHome = document.createElement('button');
    const btnMenu = document.createElement('button');
    const btnContact = document.createElement('button');

    btnHome.setAttribute('id', '1');
    btnMenu.setAttribute('id', '2');
    btnContact.setAttribute('id', '3');

    btnHome.classList.add('active');

    btnHome.innerHTML = 'Home';
    btnMenu.innerHTML = 'Menu';
    btnContact.innerHTML = "Contact";

    element.appendChild(btnHome);
    element.appendChild(btnMenu);
    element.appendChild(btnContact);
  
    return element;
  }

function home() {
  const element = document.createElement('div');
  const backgroundElement = document.createElement('div');
  const nameElement = document.createElement('div');
  const descElement = document.createElement('div');
  const hourElement = document.createElement('div');
  const locationElement = document.createElement('div');
  element.classList.add('home');
  element.setAttribute('id', 'home');
  backgroundElement.classList.add('background');
  nameElement.classList.add('homebox');
  descElement.classList.add('homebox');
  hourElement.classList.add('homebox');
  locationElement.classList.add('homebox');
  element.appendChild(backgroundElement);
  backgroundElement.appendChild(nameElement);
  backgroundElement.appendChild(descElement);
  backgroundElement.appendChild(hourElement);
  backgroundElement.appendChild(locationElement);

  const restaurantName = document.createElement('h1');
  const restaurantDesc = document.createElement('h3');
  const hourTitle = document.createElement('h1');
  const hourDesc = document.createElement('h3');
  const locationTitle = document.createElement('h1');
  const locationDesc = document.createElement('h3');

  restaurantName.innerHTML = 'Beary Breakfast Restaurant';
  restaurantDesc.innerHTML = 'Beary has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.';
  hourTitle.innerHTML = 'Hours';
  hourDesc.innerHTML = 'Sunday: 8am - 8pm \n Monday: 6am - 6pm \n Tuesday: 6am - 6pm \n Wednesday: 6am - 6pm \n Thursday: 6am - 10pm \n Friday: 6am - 10pm \n Saturday: 8am - 10pm';
  locationTitle.innerHTML = 'Location';
  locationDesc.innerHTML = '123 Forest Drive, Forestville, Maine';

  nameElement.appendChild(restaurantName);
  descElement.appendChild(restaurantDesc);
  hourElement.appendChild(hourTitle);
  hourElement.appendChild(hourDesc);
  locationElement.appendChild(locationTitle);
  locationElement.appendChild(locationDesc);

  return element;
}

function menu(){
  const element = document.createElement('div');
  const backgroundElement = document.createElement('div');
  const nameElement = document.createElement('div');
  const hourElement = document.createElement('div');
  const locationElement = document.createElement('div');
  element.classList.add('menu');
  element.setAttribute('id', 'menu');
  backgroundElement.classList.add('background');
  nameElement.classList.add('homebox');
  hourElement.classList.add('homebox');
  locationElement.classList.add('homebox');
  element.appendChild(backgroundElement);
  backgroundElement.appendChild(nameElement);
  backgroundElement.appendChild(hourElement);
  backgroundElement.appendChild(locationElement);

  const restaurantName = document.createElement('h1');
  const hourTitle = document.createElement('h1');
  const hourDesc = document.createElement('h3');
  const locationTitle = document.createElement('h1');
  const locationDesc = document.createElement('h3');

  restaurantName.innerHTML = 'Menu';
  hourTitle.innerHTML = 'Main Dishes';
  hourDesc.innerHTML = 'Sunday: 8am - 8pm \n Monday: 6am - 6pm \n Tuesday: 6am - 6pm \n Wednesday: 6am - 6pm \n Thursday: 6am - 10pm \n Friday: 6am - 10pm \n Saturday: 8am - 10pm';
  locationTitle.innerHTML = 'Beverages';
  locationDesc.innerHTML = '123 Forest Drive, Forestville, Maine';

  nameElement.appendChild(restaurantName);
  hourElement.appendChild(hourTitle);
  hourElement.appendChild(hourDesc);
  locationElement.appendChild(locationTitle);
  locationElement.appendChild(locationDesc);

  return element;
}

function footer(){
  const element = document.createElement('div');
    element.classList.add('footer');

    const copyElement = document.createElement('p');

    copyElement.innerHTML = 'Made by Siftben @2023';

    element.appendChild(copyElement);

    return element;
}
  
document.getElementById('content').appendChild(header());
document.getElementById('content').appendChild(home());
document.getElementById('content').appendChild(menu());
document.getElementById('content').appendChild(footer());

const homeTab = document.getElementById('home');
const menuTab = document.getElementById('menu');
const btnHome = document.getElementById('1');
const btnMenu = document.getElementById('2');
const btnContact = document.getElementById('3');
btnHome.addEventListener('click', openTab);
btnMenu.addEventListener('click', openTab);
btnContact.addEventListener('click', openTab);

function openTab() {
  console.log(this.id);
  hideTab();

  switch (this.id) {
    case '1':
      homeTab.style.display = '';
      break;
    
    case '2':
      menuTab.style.display = '';
      break;

    case '3':

      break;

    default:
      break;
  }
  
  
}

function hideTab(){
  homeTab.style.display = 'none';
  menuTab.style.display = 'none';
}