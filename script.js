// ---- Overlay Menu ---- //
const hamMenu = document.querySelector('.ham-menu');
const overMenu = document.querySelector('.overlay-menu');

// Open Menu
hamMenu.addEventListener('click', () => {
  overMenu.style.display = 'block';
});

const overExit = document.querySelector('.overlay-menu .close');

// Close Menu
overExit.addEventListener('click', () => {
  overMenu.style.display = 'none';
});

// Select InPage Section Course
const courseSec = document.querySelector('#course-link');
courseSec.addEventListener('click', () => {
  overMenu.style.display = 'none';
});

// ---- Teachers More Button ---- //
const teachersMore = document.querySelector('.teacher-more-text');
const teachersMoreCont = document.querySelector('.teacher-more');
const deskVer = document.querySelectorAll('.desktop-ver');
teachersMore.addEventListener('click', () => {
  for (let teacher of deskVer) {
    teacher.style.display = 'flex';
  }
  teachersMoreCont.style.display = 'none';
});
