import { Page } from "./utils";

export const resume: Page = {
  details: {
    name: "Michael Bitokhov",
    number: "(347) 374-3361",
    email: "me@mbkv.io",
    github: "mbkv",
  },
  resume: {
    title: "Full Stack Developer",
    introduction:
      "I’m a full stack developer specialized mostly in using front-end engineering libraries. Across my career, I consulted for top fortune 500 companies. I've worked with almost anything, whether UI only applications to fully fledged 500,000 loc applications. I've worked with both monolithic and microservice architectures",
    skills: [
      { skill: "Front-End Knowledge", score: 4 },
      { skill: "Javascript Knowledge", score: 4 },
      { skill: "Full-Stack Architecture", score: 4 },
      { skill: "Problem Solving", score: 4 },
      { skill: "Algorithms", score: 4 },
    ],
    technologies: [
      "TypeScript",
      "JavaScript",
      "ES6",
      "React.JS",
      "VueJS",
      "NodeJS",
      "Babel",
      "Webpack",
      "Python",
      "Bash",
      "MySQL",
      "Git",
      "Docker",
      "Ansible",
      "DevOps",
    ],
    certifications: [
      <a href="https://google.com" target="_blank" rel="noreferrer">
        TripleByte Javascript Certificate
      </a>,
      <a href="https://google.com" target="_blank" rel="noreferrer">
        TripleByte Front End Certificate
      </a>,
      <a href="https://google.com" target="_blank" rel="noreferrer">
        TripleByte Generalist Certificate
      </a>,
    ],
    experiences: [
      {
        start: "October 2021",
        end: "November 2021",
        title: "Senior Software Engineer",
        company: "PRIOS LLC",
        summary:
          "Helping migrate an existing legacy app designed with B2B in mind to a completely self-serve and autonomous SaaS app",
        notes: [
          "Worked on important refactoring for the UI API layer",
          "Worked along side UX and QA into improving the checkout page",
        ],
      },
      {
        start: "May 2019",
        end: "September 2021",
        title: "Web UI Developer",
        company: "Lab49",
        summary:
          "Consulting for top multinational financial service companies, creating high performance, highly responsive webapps to meet client expectations. Working alongside top developers in fast paced agile projects",
        notes: [
          "Led UI development of a 2 year long project for realtime data aggregations",
          "Optimized updates to the DOM to allow for 20 updates a second for >10 charts and grids",
          "Wrote backend infastructure allowing for 20 realtime updates per client for 20-100 clients per chart/grid",
          "Improved relations with the client, giving Lab49 access to more contracts both within the clients and extending our current contracts",
        ],
      },
      {
        start: "August 2017",
        end: "April 2019",
        title: "Fullstack Developer",
        company: "AppliancesConnection (1StopCamera)",
        summary:
          "Project lead of an internal project. Responsible for DevOps, creating and maintaining APIs, and performance optimizations",
        notes: [
          "Decreased page latency by 200ms, Solr response time by 500ms, Solr updating by 10 times, and page score by 30 points",
          "Identified a security bug within the Laravel framework that allowed for a complete table dump while auditing Laravel's DBAL (commits: 3368494, e5042e1, 33739f9)",
        ],
      },
    ],
  },
};
