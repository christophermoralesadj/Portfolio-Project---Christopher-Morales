const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');


// Dark Mode Styles
function darkMode() {
      nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
      toggleIcon.children[0].textContent = 'Dark Mode';
      toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
      imageMode('dark');
    }
    
// Light Mode Styles
function lightMode() {
      nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
      toggleIcon.children[0].textContent = 'Light Mode';
      toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
      imageMode('light');
}


// Switch Theme Dynamically
function switchTheme(event) {
      if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
      }
}

// Event Listener 
toggleSwitch.addEventListener('change', switchTheme); 



// get the menu toggle element and the menu element
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// add a click event listener to the menu toggle
menuToggle.addEventListener('click', () => {
  // toggle the "active" class on the menu toggle
  menuToggle.classList.toggle('active');
  // toggle the "active" class on the menu
  menu.classList.toggle('active');
});

// Send Email
function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const subject = `New message from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;

  const mailtoLink = `mailto:christopher.moralesadj@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
}

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}