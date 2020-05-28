export const projects = [
  {
    id: 1,
    title: "Note Taker",
    aboutLong:
      "Learned a great deal completing this project, particularly the utility of the Window object's localstorage API. As well as exploring browser APIs this project was an attempt at more mindfull application design, it aimed to separate out the concerns of functions as much as possible in order to make the code more extendible and readable  - a practice I will adopt and improve in future projects ",
    about: "A note taking browser app with local data persistence.",
    stack: ["JS", "ES6", "HTML5", "CSS"],
    gitURL: "https://github.com/Diongarman/notes-app",
    liveURL: "https://sicknotes.netlify.com/index.html",
    gifURL: "https://media.giphy.com/media/Xxq6Sw4y5H6NWrwLKt/giphy.gif",
    live: true,
    api: false,
  },
  {
    id: 2,
    title: "Chat App",
    aboutLong:
      "This project was part of Andrew Mead and Rob Percival's 'The Complete Node.js Developer Course' on Udemy. The application involved heavily utilising NodeJS's websocket library socket.io and understanding how to write code in event-driven patterns. The learning curve was steep but really demonstrated to me why NodeJS is described as an 'non-blocking, event driven and asynchronous' environment. In addition to the course, I extended the project to include a 'show location' feature that drops a user's location pulled from the browser into a chat - with the help of the Google Maps API. Moving forward, I plan to utilise the knowledge gained on websockets to implement IOT automation projects using socket.io or some similar technology.",
    about:
      "An NodeJS/Express Chat app with multi-user and chat room functionalities implemented using websockets.",
    stack: ["NodeJS", "ES6", "HTML5", "CSS"],
    gitURL: "https://github.com/Diongarman/node-chat-app",
    liveURL: "https://chat-app-node-dion.herokuapp.com/",
    gifURL: "https://media.giphy.com/media/U3xtW4w2tg9u82vkwH/giphy.gif",
    live: true,
    api: false,
  },

  {
    id: 3,
    title: "Hangman",
    aboutLong:
      "This project involved getting to grips with some basics of OOP to preserve the state of the user's game instance and async/await features for making requests to an external web api.",
    about: "A hangman browser application in pure JS/ES6",
    stack: ["ES6", "HTML5", "CSS"],
    gitURL: "https://github.com/Diongarman/Hangman",
    liveURL: "https://lithangman.netlify.com/",
    gifURL: "https://media.giphy.com/media/eiLMT3Y7ZRyXtBAWMf/giphy.gif",
    live: true,
    api: false,
  },
  {
    id: 4,
    title: "Todo",
    aboutLong:
      "A basic Todo browser app with a search filter. Utilised basic DOM API features and gained an appreciation of the use of WebPack to enable modular codebase.",
    about: "A simple todo browser app written in pure JS/ES6.",
    stack: ["ES6", "HTML5", "CSS"],
    gitURL: "https://github.com/Diongarman/todo-browser-app",
    liveURL: "http://tangy-wood.surge.sh/",
    gifURL: "https://media.giphy.com/media/lovtQXSYSCxrGF4nL4/giphy.gif",
    live: true,
    api: false,
  },

  {
    id: 5,
    title: "Task Manager API",
    aboutLong:
      "A full CRUD REST API with MongoDB used for data persistence and authentication middleware. I learned much about HTTP protocols and overcoming CORS issues - have a test of the GET endpoint below as proof! I learned much about prudently structuring applications to scale and also have a general idea of how web APIs are tools that can implement business logic. The next logical step of progression for me would be to investigate creating microservices based architectures.",
    about: "A Todo/Task Manager API implemented with NodeJS and MongoDB",
    stack: ["NodeJS", "MongoDB", "ES6", "HTML5", "CSS"],
    gitURL: "https://github.com/Diongarman/node-course-2-todo-api",
    liveURL: null,
    gifURL: "https://media.giphy.com/media/IgLy6NKLJcM3QhOYWe/giphy.gif",
    live: false,
    api: true,
  },

  {
    id: 6,
    title: "Starwars Characters App",
    aboutLong:
      "This application currently provides a psuedo login page, renders a list of Star Wars characters by reaching out to https://swapi.co and a character details page. The goal of this project was two-fold; I wanted to learn new skills with Ionic + Angular as well as break bad developer habits. I familiarised myself with the symbiotic, cross platform frameworks Ionic and Angular through youtube videos and documentation, which was very enriching. However, my primary goal was to tackle some of my behvioural flaws as a developer - being inclined to overreading before producing I conceived of this project with the plan of seeing how far I can get from zero Ionic and Angular knowledge to a basic working app. I really value the insight I gained about myself here, which was that I work best when I have a broad overview of a technology and making sure to only deal with the pedantry of implementation details on an ad hoc basis. In the future I plan on extending this application to have a properly functioning authentication-based login system that is powered by a NodeJS service.",
    about:
      "An cross platform mobile & browser app written in Ionic + Angular that retrieves Star Wars characters from an API.",
    stack: ["Ionic", "Angular", "ES6", "HTML5", "SASS"],
    gitURL: "https://github.com/Diongarman/ionic-angular-app",
    liveURL: null,
    gifURL: "https://via.placeholder.com/200x100",
    live: false,
    api: false,
  },
  {
    id: 7,
    title: "Portfolio & CV/Resumé App",
    aboutLong:
      "This is an Angular application that shows a list of projects, a CV/resumé and has a functioning contact page.",
    about: "A portfolio & CV/resumé app",
    stack: ["Angular", "NodeJS", "ES6", "Bootstrap-4", "HTML5", "CSS"],
    gitURL: "https://github.com/Diongarman/my-online-cv",
    liveURL: null,
    gifURL: "https://media.giphy.com/media/jTSN3w5uokVli1ykxv/giphy.gif",
    live: false,
    api: false,
  },
];
