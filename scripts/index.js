const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', description: 'This course will introduce students to programming...', technology: ['Python'], completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'This course introduces students to the World Wide Web...', technology: ['HTML', 'CSS'], completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', description: 'CSE 111 students become more organized...', technology: ['Python'], completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', description: 'This course will introduce the notion of classes...', technology: ['C#'], completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'This course builds on prior experience in Web Fundamentals...', technology: ['HTML', 'CSS', 'JavaScript'], completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, certificate: 'Web and Computer Programming', description: 'This course builds on prior experience...', technology: ['HTML', 'CSS', 'JavaScript'], completed: false }
];

const allButton = document.getElementById('All-load');
const WDDButton = document.getElementById('WDD-load');
const CSEButton = document.getElementById('CSE-load');

const div1 = document.getElementById('boxes');
const counter = document.getElementById('total-credits');
const courseDetails = document.getElementById('course-details'); // <-- Faltaba "document."

function calculateTotalCredits() {
    counter.textContent = '';
   
    let totalCredits = courses.reduce((accumulate, value) => {
        return accumulate + value.credits;
    }, 0);

    courses.forEach((helper) => {
        const div2 = document.createElement('div');
        div2.textContent = helper.subject + " " + helper.number;
        
        if (helper.completed == true) {
            div2.classList.toggle('right');
        } else {
            div2.classList.toggle('wrong');
        }

        // ---> AQUÍ ESTÁ LA MAGIA <---
        // Le decimos a ESTE cuadrito (div2) que abra el dialog con los datos de ESTE curso (helper)
        div2.addEventListener('click', () => {
            displayCourseDetails(helper);
        });

        div1.appendChild(div2);
    });
    counter.textContent = totalCredits;
};

window.addEventListener('DOMContentLoaded', () => {
    calculateTotalCredits();
});

allButton.addEventListener('click', () => {
    div1.innerHTML = '';
    counter.textContent = '';
    let Allt = courses.reduce((accumulate, value) => {
        return accumulate + value.credits;
    }, 0);

    courses.forEach((helper) => {
        const div2 = document.createElement('div');
        div2.textContent = helper.subject + " " + helper.number;
        
        if (helper.completed == true) {
            div2.classList.toggle('right');
        } else {
            div2.classList.toggle('wrong');
        }

        // ---> AQUÍ TAMBIÉN <---
        div2.addEventListener('click', () => {
            displayCourseDetails(helper);
        });

        div1.appendChild(div2);
    });
    counter.textContent = Allt;
});

WDDButton.addEventListener('click', () => {
    div1.innerHTML = '';
    counter.textContent = '';
    let WDDt = courses.filter((helper) => helper.subject === 'WDD')
                      .reduce((acc, curr) => acc + curr.credits, 0);
    
    courses.filter((helper) => helper.subject === 'WDD').forEach((helper) => {
        const div2 = document.createElement('div');
        div2.textContent = helper.subject + " " + helper.number;

        if (helper.completed == true) {
            div2.classList.toggle('right');
        } else {
            div2.classList.toggle('wrong');
        }

        // ---> AQUÍ TAMBIÉN <---
        div2.addEventListener('click', () => {
            displayCourseDetails(helper);
        });

        div1.appendChild(div2);
    });
    counter.textContent = WDDt;
});


CSEButton.addEventListener('click', () => {
    div1.innerHTML = '';
    counter.textContent = '';
    let CSEt = courses.filter((helper) => helper.subject === 'CSE').reduce((acc, curr) => acc + curr.credits, 0);
    
    courses.filter((helper) => helper.subject === 'CSE').forEach((helper) => {
        const div2 = document.createElement('div');
        div2.textContent = helper.subject + " " + helper.number;

        if (helper.completed == true) {
            div2.classList.toggle('right');
        } else {
            div2.classList.toggle('wrong');
        }

        // ---> AQUÍ TAMBIÉN <---
        div2.addEventListener('click', () => {
            displayCourseDetails(helper);
        });

        div1.appendChild(div2);
    });
    counter.textContent = CSEt;
});

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    nav.classList.toggle("navigation");
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
const lastModified = document.getElementById("lastModified");
lastModified.textContent = "Last Modified: " + document.lastModified;

// FUNCIÓN DEL DIALOG
function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
      <button id="closeModal">❌</button>
      <h2>${course.subject} ${course.number}</h2>
      <h3>${course.title}</h3>
      <p><strong>Credits</strong>: ${course.credits}</p>
      <p><strong>Certificate</strong>: ${course.certificate}</p>
      <p>${course.description}</p>
      <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    
    courseDetails.showModal();
    
    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => {
      courseDetails.close();
    });
}