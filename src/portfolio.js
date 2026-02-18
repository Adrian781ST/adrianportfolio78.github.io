// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "BIENVENIDOS.",
  title2: "Adrián",
  logo_name: "AM BITACODING",
  nickname: "",
  full_name: "ADRIÁN MELO",
  subTitle:
    "FULL STACK DEVELOPER: Aqui hacemos de todo un poco... keep going and never stop",
  resumeLink: "",
  mail: "smoshdeep@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Adrian781ST",
  linkedin: "https://www.linkedin.com/in/adrian78/",
  gmail:
    "https://wa.me/+573232448228?text=Are%20u%20lookin%20a%20developer?%20%20%20%20%20%20%20%20hooray!%20%20you%20are%20in%20the%20correct%20place",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/SmoshDeep",
  instagram: "https://www.instagram.com/mradrian10/",
};

const skills = {
  data: [
    {
      title: "Desarrollo Full Stack",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creacion de sitios web responsivos utilizando las tecnologías más recientes",
        "⚡ Estructuracion de proyectos completos impulsados por buena arquitectura alrededor de las necesidades de los interesados o cualquier cliente.",
        "⚡ Construccion de backend y frontend de aplicaciones bajo las mejores prácticas y recomendaciones de la industria.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Vite",
          fontAwesomeClassname: "simple-icons:vite",
          style: {
            color: "#646CFF",
          },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#3ECF8E",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: " E-MIGRANT ",
      subtitle: "Hackaton 72 hours",
      logo_path: "dal.png",
      alt_name: "DAL",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts",
        "⚡ Good Architecture",
        "⚡ Teamwork",
        "⚡ Problem Solving",
        "⚡ Leadership",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Programación con enfasis en Desarrollo web",
      subtitle: "Universidad de Caldas",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffc475",
      website_link: "https://supermigrante.netlify.app",
    },
    {
      title: "Analisis y Desarrollo de software ADSO",
      subtitle:
        "Scholarship Program by SENA <span class='neon-green'>en curso</span>",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#C5E2EE",
    },
  ],
};

// Experience Page
const experience = {
  title: "INTERESES",
  subtitle: "",
  description:
    "Estoy buscando oportunidades donde pueda contribuir en proyectos innovadores, nuevos retos y ser parte de la solución que necesitas.",
  header_image_path: "experience.svg",
  sections: [],
};

// Projects Page
const projectsHeader = {
  title: "CREACIONES",
  description:
    "Mis trabajos usan gran variedad de herramientas, tambien puedo adaptarme si el proyecto lo requiere, todo en pro de cumplir los objetivos planteados.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "SI NECESITAS ALGO NO DUDES EN ESCRIBIR",
    profile_image_path: "hrishi2.png",
    description: " Te respondere lo más pronto posible. ",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "DON MIGRANTE ",
      url: "https://supermigrante.netlify.app",
      description:
        "Plataforma web para atender migrantes que llegan en busca de oportunidades laborales, vivienda, educación,s salud o cualquier servicio de las instituciones activas en el territorio colombiano.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          name: "Tailwind CSS",
          iconifyClass: "simple-icons:tailwindcss",
        },
        {
          name: "Vite",
          iconifyClass: "simple-icons:vite",
          color: "#646CFF",
        },
        {
          name: "Supabase",
          iconifyClass: "simple-icons:supabase",
          style: {
            color: "#3ECF8E",
          },
        },
      ],
    },
    {
      name: "JAGUAR",
      url: "https://pantheronca.netlify.app",
      description: " Sitio web interactivo sobre jaguares creado en Vite",
      languages: [
        {
          name: "Tailwind CSS",
          iconifyClass: "simple-icons:tailwindcss",
          color: "#a76c00",
        },
        {
          name: "Javascript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Vite",
          iconifyClass: "simple-icons:vite",
          color: "#646CFF",
        },
      ],
    },

    {
      name: "FRIENDLY CALCULATOR",
      url: "https://mi-calculadora-two.vercel.app/",
      description:
        "Just a calculator, for example you can calculate your success",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Javascript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "CSS3",
          iconifyClass: "fa-css3",
          color: "#1572B6",
        },
      ],
    },
    {
      name: "MICHELLE LÓPEZ BLOG",
      url: "https://michph.netlify.app/",
      description:
        "A responsive blog to show all her works, it's simple, but minimalist. is under maintanence",
      languages: [
        {
          name: "Tailwind CSS",
          iconifyClass: "simple-icons:tailwindcss",
          color: "#a711bb",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      name: "CONTADOR DE CLIC'S",
      url: "https://counter-clics.vercel.app/",
      description:
        "it's a simple counter, u can count here and clean to start again",
      languages: [
        {
          name: "CSS3",
          iconifyClass: "fa-css3",
          color: "#1572B6",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },

    /*{
      name: "Project ",
      url: "",
      description: "An aadhard-card",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },*/
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
