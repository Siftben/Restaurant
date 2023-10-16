import './styles.css';

function header() {
    const element = document.createElement('div');
    element.classList.add('header');

    const btnHome = document.createElement('button');
    const btnMenu = document.createElement('button');
    const btnContact = document.createElement('button');

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
  element.classList.add('home');
  backgroundElement.classList.add('background');
  nameElement.classList.add('homebox');
  descElement.classList.add('homebox');
  hourElement.classList.add('homebox');
  element.appendChild(backgroundElement);
  backgroundElement.appendChild(nameElement);
  backgroundElement.appendChild(descElement);
  backgroundElement.appendChild(hourElement);

  const restaurantName = document.createElement('h1');
  const restaurantDesc = document.createElement('h3');
  const hourTitle = document.createElement('h1');
  const hourDesc = document.createElement('h3');

  restaurantName.innerHTML = 'Beary Breakfast Restaurant';
  restaurantDesc.innerHTML = 'Beary has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.';
  hourTitle.innerHTML = 'Hours';
  hourDesc.innerHTML = 'Sunday: 8am - 8pm \n Monday: 6am - 6pm \n Tuesday: 6am - 6pm \n Wednesday: 6am - 6pm \n Thursday: 6am - 10pm \n Friday: 6am - 10pm \n Saturday: 8am - 10pm';

  nameElement.appendChild(restaurantName);
  descElement.appendChild(restaurantDesc);
  hourElement.appendChild(hourTitle);
  hourElement.appendChild(hourDesc);

  return element;
}
  
document.getElementById('content').appendChild(header());
document.getElementById('content').appendChild(home());

