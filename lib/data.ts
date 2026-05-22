export const profile = {
  name: 'Jah-yee',
  displayName: 'Jah-yee',
  title: 'Full-Stack Developer',
  subtitle: 'AI Tool Builder · Hackathon Enthusiast',
  tagline: '"Prototype fast. Test harder. Ship intent."',
  location: 'Dubai, UAE / Shanghai, China',
  university: 'Fudan University',
  status: 'available' as const,
  email: 'hello@placeholder.dev',
  github: 'https://www.google.com/search?q=%E5%8A%A0%E4%B8%80',
  twitter: 'https://www.google.com/search?q=%E5%8A%A0%E4%B8%80',
  linkedin: 'https://www.google.com/search?q=%E5%8A%A0%E4%B8%80',
}

export const stats = [
  { value: 24, label: 'Projects Shipped' },
  { value: 89, label: 'GitHub Stars' },
  { value: 8, label: 'Hackathons' },
  { value: 3, label: 'Years Coding' },
]

export const about = {
  bio: [
    'Building tools that make AI actually useful — not just impressive demos that fall apart in production. Currently focused on shipping side projects while exploring the gap between research prototypes and production systems.',
    'Sweet spot: taking an idea from "wouldn\'t it be cool if..." to a working demo in 48 hours, then stress-testing whether it holds up under real usage.',
    'When not coding: hackathons, agent architecture debates, distributed systems papers. Best software is invisible — it just works, and you forget it was ever hard.',
  ],
  quickFacts: [
    { label: 'Based in', value: 'Middle East / East Asia' },
    { label: 'Education', value: 'CS (Exchange Program)' },
    { label: 'Focus', value: 'AI Tools & Developer DX' },
    { label: 'Languages', value: 'Python, TypeScript, Go' },
    { label: 'Stack', value: 'React, Node.js, Next.js' },
    { label: 'Learning', value: 'Rust, ML Systems' },
  ],
}

export const skillCategories = [
  {
    name: 'Languages',
    icon: 'Code2',
    skills: [
      { name: 'Python', proficiency: 95 },
      { name: 'TypeScript', proficiency: 88 },
      { name: 'JavaScript', proficiency: 85 },
      { name: 'Go', proficiency: 65 },
      { name: 'Rust', proficiency: 40 },
    ],
  },
  {
    name: 'Frameworks',
    icon: 'Layers',
    skills: [
      { name: 'React / Next.js', proficiency: 90 },
      { name: 'Node.js', proficiency: 85 },
      { name: 'FastAPI', proficiency: 80 },
      { name: 'Django', proficiency: 70 },
      { name: 'PyTorch', proficiency: 60 },
    ],
  },
  {
    name: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', proficiency: 92 },
      { name: 'Docker', proficiency: 78 },
      { name: 'PostgreSQL', proficiency: 75 },
      { name: 'Redis', proficiency: 68 },
      { name: 'AWS / Vercel', proficiency: 70 },
    ],
  },
  {
    name: 'Currently Exploring',
    icon: 'Compass',
    skills: [
      { name: 'LLM Fine-tuning', proficiency: 50 },
      { name: 'Multi-Agent Systems', proficiency: 45 },
      { name: 'Edge Computing', proficiency: 35 },
    ],
  },
]

export const projects = [
  {
    title: 'AgentBoard',
    description: 'Real-time dashboard for tracking Claude Code and Codex agent sessions. Shows token usage, tool calls, and cost metrics across active projects.',
    tech: ['Next.js', 'TypeScript', 'WebSocket', 'Tailwind'],
    github: 'https://github.com/jah-yee/agentboard',
    demo: null,
    featured: true,
  },
  {
    title: 'DeepResearch CLI',
    description: 'Command-line research assistant that orchestrates multiple search APIs and synthesizes findings into structured reports. 3x faster than manual research.',
    tech: ['Python', 'OpenAI API', 'SerpAPI', 'Click'],
    github: 'https://github.com/jah-yee/deepresearch-cli',
    demo: null,
    featured: true,
  },
  {
    title: 'HackTrack',
    description: 'Submission tracker for major hackathon platforms. Auto-detects project deadlines, sends reminders, and syncs submission status across Devpost, HackerEarth, and more.',
    tech: ['React', 'Node.js', 'Puppeteer', 'PostgreSQL'],
    github: 'https://github.com/jah-yee/hacktrack',
    demo: 'https://hacktrack.vercel.app',
    featured: true,
  },
]

export const philosophyQuote = {
  text: 'The best prototype is one that answers the question. The best product is one that makes you forget it exists.',
  context: 'My approach to every project: ship fast enough to learn, but not so fast you ship garbage.',
}