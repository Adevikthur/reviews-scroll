const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: `Working with this team has been incredible. Their attention to detail and technical expertise helped us launch our website ahead of schedule. The responsive design works flawlessly across all devices.`,
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: `The user interface design exceeded our expectations. The modern, clean layout perfectly represents our brand identity. Their creative solutions helped increase our user engagement by 40%.`,
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: `As an intern, I was amazed by the collaborative environment and learning opportunities. The team mentored me through complex projects, and I gained invaluable real-world experience.`,
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: `Our company has seen remarkable growth since implementing their solutions. The team's dedication to quality and innovation has made them our go-to development partner for all our digital projects.`,
  },
  {
    id: 5,
    name: "sarah chen",
    job: "software architect",
    img: "https://www.course-api.com/images/people/person-5.jpeg",
    text: `The team's technical architecture decisions were spot-on. Their microservices implementation improved our system's scalability and reduced deployment times significantly.`,
  },
  {
    id: 6,
    name: "michael patel",
    job: "product manager",
    img: "https://images.unsplash.com/photo-1734656633373-1f8e977a2a75?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: `From a product perspective, their ability to translate business requirements into technical solutions is outstanding. They consistently delivered features that exceeded stakeholder expectations.`,
  },

  {
    id: 7,
    name: "emma rodriguez",
    job: "ux researcher",
    img: "https://images.unsplash.com/photo-1741363578916-7f5fea7d6de4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: `The team's commitment to user-centered design principles was evident throughout the project. Our usability scores improved by 60% after implementing their recommended changes.`,
  },
];

// Select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

//btn items
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const randomBtn = document.querySelector(".btn-random");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// show person based on item
const showPerson = () => {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

//show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

//show previous person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
