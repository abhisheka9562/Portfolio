// about page
function openTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabLinks = document.querySelectorAll('.tab-link');
  
    tabContents.forEach(tc => tc.classList.remove('active-tab'));
    tabLinks.forEach(tl => tl.classList.remove('active'));
  
    document.getElementById(tabId).classList.add('active-tab');
    event.target.classList.add('active');
  }
// menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
  // form 
  // const scriptURL = 'https://script.google.com/macros/s/AKfycbx4a-rmJoEitUzJNPXVWZV1HGDqGle9nKnTyNC3mi-i9GGPwR8ErqxwZB0sZ-uM85ej/exec';
  // const form = document.getElementById('contact-form');

  // form.addEventListener('submit', e => {
  //   e.preventDefault();
  //   const formData = new FormData(form);
  //   const data = {
  //     name: formData.get('name'),
  //     email: formData.get('email'),
  //     message: formData.get('message')
  //   };

  //   fetch(scriptURL, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(data)
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       alert("Message sent successfully!");
  //       form.reset();
  //     } else {
  //       alert("Server error. Please try again.");
  //     }
  //   })
  //   .catch(error => {
  //     console.error("Error!", error.message);
  //     alert("Error sending message.");
  //   });
  // });

