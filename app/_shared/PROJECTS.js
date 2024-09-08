export const PROJECTS = [
  {
    id: 1,
    projectTitle: "Why you need a home NAS. ",
    projectImage:
      "https://image.coolblue.nl/624x351/content/c73c4c6c6ac6aecfc9197aadafad3bc7",
    projectDescription:
      "A short project on why you need a home Network Accessed Server demostrated using TrueNas Scale.",
    projectAuthor: "David Loder",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: false,
    projectDate: "February 2024",
    tags: ["Linux", "Truenas Scale", "NAS"],
  },
  {
    id: 2,
    projectTitle: "Playing Minecraft with your Hands",
    projectImage:
      "https://i.ytimg.com/vi/1r6ZoioTG8o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBpZe-N6DxAmjosuJ-4SpA4lV_kTQ",
    projectDescription:
      "Imagine controlling Minecraft with nothing but hand gestures—no mouse, no keyboard. This project focuses on building a custom gesture interface using your laptop's webcam, turning your hand movements into game controls. The concept is simple: by utilizing computer vision, you can map specific gestures (like swipes, waves, or pinches) to in-game actions such as walking, jumping, or mining.\n\nWhether you’re a Minecraft enthusiast looking for a new way to interact with the game or a developer interested in creating more immersive, hands-free gaming experiences, this project will help you understand the fundamentals of gesture recognition and interface design. With some coding and a bit of patience, you’ll transform your webcam into a controller that bridges the gap between the physical and virtual worlds.",
    projectAuthor: "Jayming Liu",
    projectLinks: [
      {
        id: 1,
        name: "Github",
        href: "https://github.com/Capstone-Projects-2024-Spring/project-motion",
      },
    ],
    featuredProject: true,
    projectDate: "April 2024",
    tags: ["Python", "Minecraft"],
  },
  {
    id: 3,
    projectTitle: "Wordpress and Why You Should Use It",
    projectImage:
      "https://avada.com/wp-content/uploads/2021/06/mobile-friendly.png",
    projectDescription:
      "In today's digital age, having a website is no longer optional—it's a necessity. Whether you're running a business, freelancing, or simply building a personal brand, a website serves as your virtual headquarters. It provides a space where people can learn more about who you are, what you offer, and how they can engage with you.\n\n One of the easiest ways to build and manage your own website is by using WordPress, a platform that powers over 40% of the web. But what makes the process even more streamlined is leveraging powerful plugins like Avata. Avata helps you create a responsive, visually appealing website with no coding experience required. It offers customizable templates and easy-to-use design tools, allowing you to build professional pages in minutes.\n\nBeyond just looks, having a website expands your reach, builds credibility, and acts as a hub for your content and online presence. From e-commerce stores to blogs and portfolios, the potential is limitless when you have a platform that's uniquely yours.",
    projectAuthor: "Josh O'Halloran",
    projectLinks: [
      { id: 1, name: "Website", href: "https://joshuaohalloran.me" },
      { id: 2, name: "Avata Plugin Link", href: "https://avada.com/" },
    ],
    featuredProject: true,
    projectDate: "April 2024",
    tags: ["Freelance", "WordPress", "Avata", "Portfolio"],
  },
  {
    id: 4,
    projectTitle: "CookBook Pro",
    projectImage: "/images/uploads/cookbookpro.png",
    projectDescription:
      "Cookbook-Pro is a web-based application that serves as a comprehensive platform for discovering new recipes, planning meals, nutrition tracking, and shopping list generation. It is designed to streamline the user's cooking experience by providing a wide range of features powered by AI and modern web technologies. Simply put, it is a cookbook... for pros.\n\n Discover new, mouthwatering recipes from our extensive collection of thousands of savory dishes. Explore recipe details, add favorites to your collection, or easily add ingredients to your cart. Simply type in your cravings and let the culinary adventure begin! Not sure where to start? Check out the suggested meal option right under the search bar for inspiration!\n\n CookBook Pro is a Receipe and Meal Planner App build on ReactJS",
    projectAuthor: "Shawn Dutill",
    projectLinks: [
      {
        id: 1,
        name: "Project Link",
        href: "https://cookbook-pro-49b95.firebaseapp.com/",
      },
      {
        id: 2,
        name: "Github",
        href: "https://github.com/Capstone-Projects-2024-Spring/project-cookbook-pro",
      },
    ],
    featuredProject: true,
    projectDate: "April 2024",
    tags: ["ReactJS", "TypeScript"],
  },
  {
    id: 5,
    projectTitle: "Scheduler Complier",
    projectImage: "",
    projectDescription: `A breadth-first schedule complier app for Temple University.\n\n The interface takes in the desired classes in the form "SUBJ ####" or gened code such as "GA". If the user does not know the required courses in their degree program, then they can look it up and click on it, and the course codes and the corresponding names will populate. Like in TUPortal, users must select the semester they wish to schedule for while the campus defaults to "Main". In addition, users can add days and times they are not available.\n\n The biggest challenges came from the user interface itself and integrating the graphical display of schedules with it. The first issue was making the graphical displays appear itself. This was no issue in the IDE, but when the program was packaged as an executable, it spawned another instance of the interface rather than the desired matplotlib graph. Ultimately, embedding the graph into a tkinter frame instead of spawning a process that showed the graph fixed the issue. On the other hand, the tkinter library inherently does not help make interfaces intuitive without some workarounds and additional functions which led to some minor challenges.`,
    projectAuthor: "Eric Reizas",
    projectLinks: [
      {
        id: 1,
        name: "Youtube",
        href: "https://www.youtube.com/watch?v=sdSEkCOxR30",
      },
      {
        id: 2,
        name: "Github",
        href: "https://github.com/cis3296f23/01-Schedule-Compiler",
      },
    ],

    featuredProject: true,
    projectDate: "April 2024",
    tags: ["Breadth-First", "Python"],
  },
  {
    id: 6,
    projectTitle: "JavaScript Games",
    projectImage: "",
    projectDescription: "No Description",
    projectAuthor: "Jacob Snarr",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: true,
    projectDate: "December 2023",
    tags: ["JavaScript"],
  },
  {
    id: 7,
    projectTitle: "Riot API & LoL Data Analysis",
    projectDescription:
      "A simple program that pulling data on a League of Legends account from the Riot Games API.",
    projectAuthor: "Shawn Dutill",
    projectLinks: [],
    projectLink: "",
    githubLink: "https://github.com/sdutill",
    featuredProject: false,
    projectDate: "November 2023",
    tags: [],
  },
  {
    id: 8,
    projectTitle: "IVR Tool For Faculty",
    projectDescription: "No Description",
    projectAuthor: "Neil Conley",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: false,
    projectDate: "November 2023",
    tags: [],
  },
  {
    id: 9,
    projectTitle: "CHIP-8 in JavaScript",
    projectDescription: "No Description",
    projectAuthor: "Jacob Snarr",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: false,
    projectDate: "November 2023",
    tags: ["JavaScript"],
  },

  {
    id: 10,
    projectTitle: "Calculator Project",
    projectDescription: "No Description",
    projectAuthor: "Jacob Shin",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: false,
    projectDate: "November 2023",
    tags: [],
  },

  {
    id: 12,
    projectTitle: "Chess Engine",
    projectDescription: "No Description",
    projectAuthor: "Brian Ervin",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: false,
    projectDate: "October 2023",
    tags: [],
  },
  {
    id: 13,
    projectTitle: "Appropriate Music Separator",
    projectDescription: "No Description",
    projectAuthor: "Eric Reizas",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: false,
    projectDate: "October 2023",
    tags: [],
  },
  {
    id: 14,
    projectTitle: "SEC schedule of investments web scrapper",
    projectDescription: "No Description",
    projectAuthor: "Tony Siu",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: false,
    projectDate: "October 2023",
    tags: [],
  },
  {
    id: 15,
    projectTitle: "BimlFlex Documentation Webapp Demo",
    projectDescription: "No Description",
    projectAuthor: "Shawn Dutill & John Currie",
    projectLinks: [],
    projectLink: "https://bimlflexdocappdemo.web.app/#",
    githubLink: "",
    featuredProject: false,
    projectDate: "October 2023",
    tags: ["BimlFlex"],
  },
  {
    id: 16,
    projectTitle: "Excel Deltas",
    projectDescription: "No Description",
    projectAuthor: "Shawn Dutill",
    projectLinks: [],
    projectLink: "",
    githubLink: "https://github.com/sdutill",
    featuredProject: false,
    projectDate: "Spring 2023",
    tags: ["Microsoft Excel"],
  },
  {
    id: 17,
    projectTitle: "Conveyor Belts",
    projectDescription: "No Description",
    projectAuthor: "Tyler Schemaitat",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: false,
    projectDate: "Spring 2023",
    tags: [],
  },
  {
    id: 18,
    projectTitle: "Raff",
    projectDescription: "No Description",
    projectAuthor: "Alex McGinn",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: false,
    projectDate: "Spring 2023",
    tags: [],
  },
  {
    id: 19,
    projectTitle: "Hangman in C",
    projectDescription:
      "Hangman program recreated in C, originally written in Java.",
    projectAuthor: "Francis R Scallatino",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: false,
    projectDate: "Spring 2023",
    tags: ["C"],
  },
  {
    id: 20,
    projectTitle: "Weather and NBA Report",
    projectDescription: "No Description",
    projectAuthor: "Eric Reizas",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: false,
    projectDate: "Spring 2023",
    tags: [],
  },
  {
    id: 21,
    projectTitle: "Philly Tree Map",
    projectDescription: "No Description",
    projectAuthor: "John Currie",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: false,
    projectDate: "Spring 2023",
    tags: [],
  },
  {
    id: 22,
    projectTitle: "Cheater's Hangman",
    projectDescription: "No Description",
    projectAuthor: "Amitai Goldmeer",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: false,
    projectDate: "Spring 2023",
    tags: [],
  },
  {
    id: 23,
    projectTitle: "Blackhole Simulation and GPU programming",
    projectImage:
      "https://cdn.mos.cms.futurecdn.net/4Vv43ekp8QVwL95So7Z8sb.jpg",
    projectDescription:
      "How to render a 3D model of a black hole using GPU programming",
    projectAuthor: "David Palomino",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: true,
    projectDate: "February 2024",
    tags: ["CUDA", "Simulation", "Black-Hole"],
  },
  {
    id: 24,
    projectTitle: "Morse Code Translator",
    projectDescription: "No Description",
    projectAuthor: "Riley Riley",
    projectLinks: [],
    projectLink: "",
    githubLink: "",
    featuredProject: false,
    projectDate: "Spring 2023",
    tags: [],
  },
];
