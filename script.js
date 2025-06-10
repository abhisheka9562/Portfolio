function openTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabLinks = document.querySelectorAll('.tab-link');
  
    tabContents.forEach(tc => tc.classList.remove('active-tab'));
    tabLinks.forEach(tl => tl.classList.remove('active'));
  
    document.getElementById(tabId).classList.add('active-tab');
    event.target.classList.add('active');
  }
  