import { Code, Database, Layout, Server, Cpu } from "lucide-react";

export const portfolioData = 



{
  name: "Shashwat Mishra",
  role: "Computer Science Engineer",
  tagline: "Building responsive systems with algorithmic precision.",
  bio: "Developer with strong foundations in Data Structures (1700+ LeetCode) and experience building responsive frontend applications. Focused on implementing practical solutions and currently learning backend technologies to build complete, end-to-end systems.",
  social: {
    email: "shashwatm878@gmail.com",
    formal: [
      { 
        name: "LinkedIn", 
        url: "https://www.linkedin.com/in/shashwat-mishra2508/", // <--- UPDATE THIS
        id: "linkedin"
      },
      { 
        name: "GitHub", 
        url: "https://github.com/BeingShashwat", // <--- UPDATE THIS
        id: "github"
      },
      { 
        name: "LeetCode", 
        url: "https://leetcode.com/u/shashwatm878/", // <--- UPDATE THIS
        id: "leetcode"
      },
      { 
        name: "Codeforces", 
        url: "https://codeforces.com/profile/shashwatm878", // <--- UPDATE THIS
        id: "codeforces"
      }
    ],
    informal: [
      { 
        name: "X (Twitter)", 
        url: "https://x.com/being_shashwatt", // <--- UPDATE THIS
        id: "x" 
      },
      { 
        name: "Instagram", 
        url: "https://instagram.com/being_shashwatt", // <--- UPDATE THIS
        id: "instagram" 
      },
      { 
        name: "Reddit", 
        url: "https://www.reddit.com/user/Silent-Wish-2508/", // <--- UPDATE THIS
        id: "reddit" 
      },
    ]
  },
  skills: [
    { name: "Data Structures", icon: Cpu },
    { name: "C++", icon: Code },
    { name: "React.js", icon: Layout },
    { name: "Tailwind CSS", icon: Layout },
    { name: "Spring Boot", icon: Server },
    { name: "SQL / MongoDB", icon: Database }
  ],
  experience: [
    {
      company: "Tycho Technologies",
      role: "Frontend Intern",
      period: "May 2025 – Jun 2025",
      points: [
        "Built 15+ responsive React.js and Tailwind components across 3 internal dashboards.",
        "Optimized page load time by 30% using memoization and lazy loading.",
        "Refactored 25+ reusable components, decreasing duplicate code by 40%.",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "CrowdAid",
      category: "Disaster Response Platform",
      stack: ["React.js", "Tailwind", "REST APIs"],
      description: "A real-time crowdsourced reporting platform supporting 5+ incident types.",
      details: "Integrated REST APIs and streamlined rendering, reducing data refresh latency by 35%. Designed 20+ scalable components.",
      link: "#",
    },
    {
      id: 2,
      title: "Sudoku Solver",
      category: "Algorithm Visualizer",
      stack: ["Python", "Backtracking"],
      description: "Recursive backtracking solver capable of solving 100+ puzzles with 100% correctness.",
      details: "Reduced average solving time from 2s to <0.5s using pruning and constraint propagation.",
      link: "#",
    },
    {
      id: 3,
      title: "Simple Timer App",
      category: "Utility Tool",
      stack: ["React.js", "JavaScript"],
      description: "Stopwatch and countdown features with millisecond precision.",
      details: "Added local storage persistence and Wake Lock API. Reduced re-renders by 40%.",
      link: "#",
    },
  ],
  education: [
    {
      institution: "Chandigarh University",
      degree: "B.E. Computer Science and Engineering",
      period: "Aug 2023 – May 2027",
      score: "CGPA: 7.8",
    },
    {
      institution: "SJS Public School",
      degree: "Intermediate",
      period: "Apr 2021 – Mar 2022",
      score: "85.2%",
    },
    {
      institution: "SJS Public School",
      degree: "Highschool",
      period: "Apr 2019 – Mar 2020",
      score: "94.4%",
    },
  ],
  achievements: [
    "Ranked in top 1% in university-level AMCAT among 4000+ students.",
    "Led a 5-member team selected for Smart India Hackathon (SIH) 2025 national round.",
    "Solved 500+ DSA problems; achieved 1700+ LeetCode rating.",
  ],
};