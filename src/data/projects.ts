export interface ProjectImage {
  id: string;
  caption: string;
  img: string;
}

export interface Project {
  id: string;
  name: string;
  title: string;
  url: string;
  github: string[];
  desc: string;
  D_desc: string;
  skills?: string[];
  img: string;
  Arrimg: ProjectImage[];
}

const projects: Project[] = [
  {
    id: "1",
    name: "Brahmaand.space",
    title:
      "Content Websites for User and Content Creator and they can post their Content.",
    url: "https://brahmaand.space",
    github: ["https://github.com/anujeshyadav/brahmaand.space.git"],
    desc: "A Content Website, where user and content creator Can Submit Content. and user Can give them Rate and Review and win exiting Prize",
    skills: ["React.js", "Tailwind", "FireBase", "react strap"],
    img: "/projects/Sociopath/bramaand.jpeg",
    D_desc:
      "Brahmaand.space is a Content Website. Where user and Content Creator can Submit their Content and Resources with link, details and category. and get comments by user about their product and Resources. if one gets the rate & review then one can get the Exiting Rewards and Points. and can earn cash daily, weekly and monthly. and user can Bookmark that content and get it to their panel for further use. also User Can login with Gmail account after verification through email. and user can Filter based on free, paid , video text and video and text and also on content year and content languages",
    Arrimg: [
      {
        id: "11",
        caption: "Search Bar",
        img: "/projects/Sociopath/Brahmaand 1.jpeg",
      },
      {
        id: "12",
        caption: "Products page",
        img: "/projects/Sociopath/brahmaaand2.jpeg",
      },
      {
        id: "13",
        caption: "Product Details ",
        img: "/projects/Sociopath/brahmaand3.jpeg",
      },
      {
        id: "14",
        caption: "Home banner page",
        img: "/projects/Sociopath/brahmaand4.jpeg",
      },
      {
        id: "15",
        caption: "Top Category page",
        img: "/projects/Sociopath/bramaand.jpeg",
      },
    ],
  },
  {
    id: "2",
    name: "My Manager",
    title:
      "A CRM where User can Manage their Social Business page Manage through CRM",
    url: "https://me.mymanager.com",
    github: ["https://github.com/anujeshyadav/mymanage.git"],
    desc: "CRM for manager Multiple Task like Manage Social Media Connectivity and Review Rating ",
    D_desc:
      "Mymanager is American based Project that is use to manager Multiple Things. I worked on Social media Integration of Facebook Login and Business page of Facebook would be manage Through CRM, Like getting Business Page Post and their comment and we can reply on each comment and we can schedule the Posting of Content with Image or Without Image or Video also can delete comment and post thorugh CRM",
    skills: ["React.js", "Facebook api", "Tailwind", "bootstrap"],
    img: "/projects/Sociopath/mymanager.jpeg",
    Arrimg: [
      {
        id: "21",
        caption: "Dashboard",
        img: "/projects/Sociopath/maymanager3.jpeg",
      },
      {
        id: "22",
        caption: "Social connect",
        img: "/projects/Sociopath/mymanager.jpeg",
      },
      {
        id: "23",
        caption: "Social connection",
        img: "/projects/Sociopath/mymanager1.jpeg",
      },
      {
        id: "24",
        caption: "Facebook connection",
        img: "/projects/Sociopath/mymanager2.jpeg",
      },
    ],
  },
  {
    id: "3",
    name: "Astrologically Web",
    title: "Here User and Astro can Connect via Video/Voice/Chat.",
    url: "https://astrologically.in",
    github: ["https://github.com/anujeshyadav/A_astrologically_web.git"],
    desc: "Platform for online connectivity of Astrologer With User Via Voice/ Video/ and Chat.",
    D_desc:
      "Astrologically platform is developed for online connectivity of Astrologer With User through Voice Call/ Video Call / and Chat and having many other usage like astromall. and astro Mall is used to sell the product of astrologer and they can earn money also having facility for match making lal kitabh, pitra dosh and live streaming of pooja and free astrologer talk with user and Astrologer",
    skills: ["React.js", "Tailwind", "FireBase", "reactstrap"],
    img: "/projects/Sociopath/homepage.png",
    Arrimg: [
      {
        id: "37",
        caption: "Home Page",
        img: "/projects/Sociopath/homepage.png",
      },
      {
        id: "31",
        caption: "Home Page",
        img: "/projects/Sociopath/astrologically.jpeg",
      },
      {
        id: "32",
        caption: "Astro details page",
        img: "/projects/Sociopath/astrodetail page.jpeg",
      },
      {
        id: "33",
        caption: "Astromall page",
        img: "/projects/Sociopath/astromall.jpeg",
      },
      {
        id: "34",
        caption: "Astropanel page",
        img: "/projects/Sociopath/astropanel.png",
      },
      {
        id: "35",
        caption: "Live Astrologer page",
        img: "/projects/Sociopath/liveastro.jpeg",
      },
    ],
  },
  {
    id: "5",
    name: "Trupee CRM",
    title:
      "This is a based on Roles and permission of each user given by super admin",
    url: "",
    github: ["https://github.com/anujeshyadav/myPortFolio.git"],
    desc: "This is my Personnel PortFolio, to showcase my skills in frontend.",
    D_desc:
      "This is multivendor CRM used for creating Roles and permission according to roles and permissions side tab would be shown or hide and permission to create edit, delete or update is given based on roles assign to perticular user, user is created with their roles. they can add their product and assign to client or also able to create invoices. SuperAdmin can see all trnsaction but each user can see only their activity ",
    skills: ["React.js", "bootstrap", "ReactStrap"],
    img: "/projects/Sociopath/trupee.png",
    Arrimg: [
      {
        id: "41",
        caption: "text",
        img: "/projects/Sociopath/trupee1.png",
      },
      {
        id: "42",
        caption: "text",
        img: "/projects/Sociopath/trupee2.png",
      },
      {
        id: "43",
        caption: "text",
        img: "/projects/Sociopath/trupee3.png",
      },
      {
        id: "44",
        caption: "text",
        img: "/projects/Sociopath/trupee4.png",
      },
      {
        id: "45",
        caption: "text",
        img: "/projects/Sociopath/trupee.png",
      },
    ],
  },
];

export default projects;
