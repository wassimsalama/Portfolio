import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ML/AI Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "8 Ball Pool Full Stack ",
    date: " January 2024 - April 2024",
    points: [
      "− Engineered the core game mechanics and physics engine for an 8-ball pool game in C, incorporating realistic ball movement and collision detection to ensure an engaging gameplay experience.",
      "- Developed a scalable FASTAPI server backend for game management, supporting multiplayer sessions and real-time state synchronization through eﬀicient GET and POST requests.",
      "− Programmed the backend using relational databases and SQL to develop and optimize data structures, improving query eﬀiciency by 10% and enhancing data scalability for a critical company project.",
    ],
  },
  {
    title: "Disease Image Classifier",
    
    date: "March 2024 - Present",
    points: [
      "− Addressed a critical gap in agricultural health by leveraging TensorFlow and advanced image processing techniques to diagnose potato diseases",
      "- Conducted extensive research and implemented MLOps practices to streamline model versioning, training, and deployment for the project",
      "- Developed a full-stack application using FastAPI and React, providing a user-friendly interface for real-time disease classification",
    ],
  },
  {
    title: "AI-Driven Property Value Estimator",
    date: "September 2023 - January 2024",
    points: [
      "- Developed four predictive models using Scikit-learn for automating the real estate valuation process, enhancing the accuracy of property appraisals through customized inputs and meeting the demand for dependable market value assessments.",
      "- Utilized Pandas and NumPy for advanced data manipulation, and applied SciPy for intricate mathematical computations, substantially elevating the precision and reliability of the valuation models.",
      "- Conducted independent web scraping with BeautifulSoup to gather essential real estate data from Kijiji, augmenting the training dataset and bolstering the predictive performance of the models.",
      "- Created clear and insightful data visualizations with Matplotlib, improving the interpretability of model predictions and enhancing the user interface for a more intuitive analysis of real estate valuations.",
    ],
  },
  {
    title: "Java Mancala Game",
   
    date: "September 2023 - January 2024    ",
    points: [
      "- Identified the need for an engaging educational tool in object-oriented programming, developed a Java-based Mancala game with two distinct gameplay modes using advanced OOP concepts and Java Swing for user interfaces, and successfully showcased the intuitive and engaging design at a university project exhibition, receiving positive user feedback.",
      "- Developed a Java-based Mancala game that supports two different gameplay modes to cater to diverse user preferences.",
      "- Applied OOP principles such as encapsulation for managing game state, inheritance for game variations, and polymorphism for rendering different game strategies.",
    ],
  },
  {
    title: "Spell Checker",
    date: "January 2024 - April 2024",
    points: [
      "- Engineered a multithreaded spell checker using C, employing threads to parallelize the checking process, thus significantly reducing latency and handling multiple input streams concurrently.",
      "- Integrated advanced algorithms to enhance spell-checking speed and accuracy.",
      "- Optimized threading and process management using Linux kernel features, deepening my technical expertise in system-level programming.",
    ],
  },
  {
    title: "Dynamic Image Processor",
    date: "January 2024 - April 2024",
    points: [
      "- Spearheaded the creation of a Python-based application using NumPy and OpenCV for sophisticated image manipulation and analysis, meeting predefined specifications and significantly boosting image data utilization.",
      "- Applied complex computer vision methodologies, utilizing camera intrinsics and rotation matrices to interpret and adjust images, achieving precise object recognition and spatial orientation, ultimately enhancing digital image analysis capabilities.",
      "- Streamlined image analysis workflows by automating the generation and storage of modified images within a structured directory system, facilitating efficient access and review of processed images.",
      "- Engineered a scalable system for handling large datasets of images, optimizing both performance and accuracy in object detection and image manipulation, thereby providing robust support for intricate image analysis projects.",
    ],
  },
  {
    title: "Premier League Predictive Analytics Tool",
    date: "September 2023 - December 2023",
    points: [
      "- Engineered a Python-based script to meticulously scrape Premier League match statistics, laying the groundwork for an in-depth analysis of game dynamics and player performances.",
      "- Utilized Pandas for efficient data organization and leveraged NumPy for the processing of numerical data, ensuring a solid foundation for subsequent analytical tasks.",
      "- Employed Matplotlib for data visualization, effectively uncovering and presenting patterns and trends within the sports data, thereby enabling insightful analysis of match statistics.",
      "- Applied predictive machine learning techniques to forecast Premier League match outcomes, significantly advancing sports analytics capabilities by predicting game results with enhanced accuracy.",
    ],
  },
  {
    title: "Canadian Name and Ethnicity Analyzer",
    date: "January 2023 - April 2023",
    points: [
      "- Managed a team of software engineers in a dynamic environment to analyze Open Source baby name data across Canadian provinces, focusing on cultural naming trends.",
      "- Developed and shared key insights into cultural trends through detailed data analysis and visualization, enhancing understanding of regional preferences.",
      "- Coordinated data collection and analysis using Pandas, employing rigorous data validation techniques to maintain integrity and usability.",
      "- Implemented Matplotlib for visualizing data, uncovering regional cultural naming preferences and presenting these insights.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mancala Game",
    description:
      "Developed this game called Mancala Game using OOP concepts , this game is basically moving stones through the holes and the winner is the one with more balls in their store",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
    ],
    image: tesla,
    source_code_link: "https://github.com/wassimsalama/Mancala_game",
  },
  {
    name: "Kjiji Analysis",
    description:
      "a ML model to value if house is a good buy or not based on different factors ",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/wassimsalama/kjiji_analysis",
  },
  {
    name: "8 Ball Pool Full Stack",
    description:
      "A full stack website where you can play ball pool game , developed using multiple programming languages",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "C",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "XML",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/wassimsalama/8_ballpool",
  },
  {
    name: "Premier League Predictive Model",
    description:
      "A model to predict future fixtures in the premier league based on past results and factors going into the game",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
     
    ],
    image: jobit,
    source_code_link: "https://github.com/wassimsalama/Prem_Analysis",
  },
];

export { services, technologies, experiences, testimonials, projects };