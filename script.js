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

// ---- Teacher Info List ---- //
const teacherInfoList = [
  {
    imageURL: 'src/profile-photo/david-mallan.jpg',
    teacherName: 'David J. Mallan',
    teacherTitle: 'Professor of Computer Science at Harvard University',
    teacherDesc: 'Known for teaching course CS50, which is the largest open-learning course at Harvard University and Yale.',
  },
  {
    imageURL: 'src/profile-photo/Wes Box.jpg',
    teacherName: 'Wes Bos',
    teacherTitle: 'Full Stack JavaScript developer from Canada',
    teacherDesc: 'I\'m a web developer with 23 years experience, teacher and speaker from Hamilton, Ontario 🇨🇦.',
  },
  {
    imageURL: 'src/profile-photo/jon-kleinberg.jpg',
    teacherName: 'Jon M. Kleinberg',
    teacherTitle: 'Professor in the Computer Science Department at Cornell University',
    teacherDesc: 'His research focuses on issues at the interface of networks and information systems.',
  },
  {
    imageURL: 'src/profile-photo/charles-leiserson.jpg',
    teacherName: 'Charles Leisers',
    teacherTitle: 'Professor of Computer Science and Engineering at MIT',
    teacherDesc: 'Parallel computing is tremendously underutilized in today’s computer systems, due to its complexity.',
  },
  {
    imageURL: 'src/profile-photo/clifford-stein.jpg',
    teacherName: 'Clifford Seth Stein',
    teacherTitle: 'professor of industrial engineering and operations research at Columbia University',
    teacherDesc: 'Stein\'s research interests include the design and analysis of algorithms, combinatorial optimization.',
  },
  {
    imageURL: 'src/profile-photo/sal-khan.jpg',
    teacherName: 'Sal Khan',
    teacherTitle: 'Sal Khan is the founder and CEO of Khan Academy',
    teacherDesc: 'He is also the founder of Schoolhouse.world, Khan Lab School and Khan World School, all nonprofits.',
  },
];

// ---- Teachers List Dynamic Loading ---- //
const teacherList = document.querySelector('.teachers-list-container');

function loadTeachers(teacherInfoList) {
  for (let i = 0; i < teacherInfoList.length; i += 1) {
    const teacher = document.createElement('li');
    teacher.classList.add('teacher-container');
    const info = teacherInfoList[i];
    const teacherItem = `
      <div class='teacher-image'>
        <img src='${info.imageURL}' alt='teacher profile image' width='80px'>
      </div>
      <div class='teacher-sub'>
        <h3 class='teacher-name'>${info.teacherName}</h3>
        <span class='teacher-title'>${info.teacherTitle}</span>
        <div class='half-border-gray'></div>
        <p class='teacher-description'>${info.teacherDesc}</p>
      </div>
    `;
    teacher.innerHTML = teacherItem;
    if (i < 2) {
      teacherList.appendChild(teacher);
    } else {
      teacher.classList.add('desktop-ver');
      teacherList.appendChild(teacher);
    }
  }
}
loadTeachers(teacherInfoList);

// ---- Teachers More Button ---- //
const teachersMore = document.querySelector('.teacher-more-text');
const teachersMoreCont = document.querySelector('.teacher-more');
const deskVer = document.querySelectorAll('.desktop-ver');
teachersMore.addEventListener('click', () => {
  for (let i = 0; i < deskVer.length; i += 1) {
    deskVer[i].style.display = 'flex';
  }
  teachersMoreCont.style.display = 'none';
});
