export const FULL_NAME = 'Allen Jiang'
export const NAME_INITIALS = FULL_NAME.split(' ').map((part) => part[0]).join('').toUpperCase()
export const CURRENT_ROLE = 'Software developer'
export const HERO_TITLE = 'Building software that'
export const HERO_TITLE_EMPHASIS = 'moves teams forward.'
export const HERO_CTA = 'See my work'
export const HERO_INTRO_PREFIX = 'Hi, I’m '
export const HERO_INTRO_SUFFIX = ', a full stack developer focused on creating scalable products, strengthening the systems behind them, and helping teams deliver work that is dependable, maintainable, and ready for real-world pressure.'
export const WORK_HEADING = 'Software'
export const WORK_SUBHEADING = 'built to last.'
export const ABOUT_EYEBROW = 'About me'
export const SKILLSET_EYEBROW = 'My Skillset'
export const ABOUT_TITLE_PREFIX = 'Good software takes'
export const ABOUT_TITLE_SUFFIX = 'full ownership'
export const ABOUT_TITLE_ACCENT = 'from idea to release.'
export const ABOUT_BODY = 'I take ownership from the first question to the final release, balancing speed with discipline and care. I move decisively, take initiative without being asked, and focus on the details that make software reliable, maintainable, and genuinely valuable.'
export const CONTACT_EYEBROW = 'Need someone to take on your next project?'
export const CONTACT_TITLE = 'Let’s build it well.'
export const FOOTER_TAGLINE = 'Built with ownership.'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/allen-yuan-jiang/'
export const GITHUB_URL = 'https://github.com/VanillaMarzipan'
export const RESUME_URL = '/allen_jiang_resume.pdf'
export const RESUME_DOWNLOAD_NAME = 'allen_jiang_resume.pdf'
export const EMAIL = 'allen.jiang.jobs@gmail.com'
export const START_YEAR = 2022
export const CITY = 'Houston'
export const STATE = 'TX'
export const PROJECTS = [
  {
    companyName: 'EOG Resources',
    projectName: 'Livestream platform, Jarvis AI, MiniMe AI',
    description:
      'Built a Twitter-like field communication platform and its native AIs for energy teams to share updates, coordinate work, and keep critical information accessible in real time.',
    tags: ['React', 'Python', 'AWS', 'MongoDB'],
    thumbnail: '/eog_thumbnail.png',
  },
  {
    companyName: 'United Airlines',
    projectName: 'UA Travel Readiness Mobile App',
    description:
      'Built the United Airlines mobile app experience for travel readiness and document check-in, helping passengers move through the airport faster and with less friction.',
    tags: ['React Native', 'Java', 'ASP.NET', 'PostgreSQL'],
    thumbnail: '/ua_thumbnail.png',
  },
  {
    companyName: "Dick's Sporting Goods",
    projectName: 'DSG Point of Sale System',
    description:
      'Built the latest POS platform for DSG, improving checkout flow, item lookup, and store operations at scale across thousands of retail locations.',
    tags: ['React', 'Python', 'ASP.NET', 'PostgreSQL'],
    thumbnail: '/dsg_thumbnail.png',
  },
]
export const SKILL_GROUPS = [
  { label: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'SQL'] },
  { label: 'Frontend', skills: ['React', 'Material UI', 'Next.js', 'Tailwind CSS'] },
  { label: 'Backend', skills: ['Node.js', 'Express.js', 'Fast API', 'ASP.NET Core'] },
  { label: 'Databases', skills: ['PostgreSQL', 'DynamoDB', 'MongoDB', 'MySQL'] },
  { label: 'Cloud & DevOps', skills: ['Docker', 'Kubernetes', 'AWS', 'Azure DevOps', 'GitHub'] },
  { label: 'Testing', skills: ['Jest', 'Cypress', 'Playwright', 'Postman'] },
  { label: 'Teamwork', skills: ['Monday', 'Jira', 'Confluence', 'Trello'] },
]
