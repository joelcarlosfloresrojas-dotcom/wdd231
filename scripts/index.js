const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


const allButton=document.getElementById('All-load');
const WDDButton=document.getElementById('WDD-load');
const CSEButton=document.getElementById('CSE-load');


const div1=document.getElementById('boxes');
const counter=document.getElementById('total-credits');




function calculateTotalCredits() {
    counter.textContent = '';
   
    let totalCredits=0;
    courses.forEach((helper) => {
        
        const div2=document.createElement('div');
    
        div2.textContent=helper.subject + " " + helper.number;
        totalCredits += helper.credits;
        if(helper.completed==true){
            div2.classList.toggle('right');
            
            
        } else {
            div2.classList.toggle('wrong');
        }
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
   let Allt=0
   courses.forEach((helper) => {
    const div2=document.createElement('div');
    div2.textContent=helper.subject + " " + helper.number;
    Allt += helper.credits;
    if(helper.completed==true){
        div2.classList.toggle('right');
    } else {
        div2.classList.toggle('wrong');
    }
    div1.appendChild(div2);
});
    counter.textContent = Allt;
});

WDDButton.addEventListener('click', () => {
    div1.innerHTML = '';
   counter.textContent = '';
   let WDDt=0
    courses.filter((helper) => helper.subject === 'WDD').forEach((helper) => {
    const div2=document.createElement('div');
    
    div2.textContent=helper.subject + " " + helper.number;
    WDDt += helper.credits;
    if(helper.completed==true){
        div2.classList.toggle('right');

    } else {
        div2.classList.toggle('wrong');
    }
    div1.appendChild(div2);
   });
  counter.textContent = WDDt;
});


CSEButton.addEventListener('click', () => {
    div1.innerHTML = '';
    counter.textContent = '';
    let CSEt=0
    courses.filter((helper) => helper.subject === 'CSE').forEach((helper) => {
    const div2=document.createElement('div');
    div2.textContent=helper.subject + " " + helper.number;
    CSEt += helper.credits;
    if(helper.completed==true){
        div2.classList.toggle('right');
    } else {
        div2.classList.toggle('wrong');
    }
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