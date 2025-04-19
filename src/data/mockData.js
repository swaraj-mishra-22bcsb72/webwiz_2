import aiImage from '../assets/ai.webp';
import climateImage from '../assets/climate.avif';
import quantumImage from '../assets/quantum.webp';

export const trendingTopics = [
  {
    id: 1,
    title: 'Quantum Computing',
    description: 'Exploring the future of computing technology and its potential applications in various fields.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Quantum computing is a rapidly growing field that uses principles of quantum mechanics to perform computations that would be impossible or take an impractical amount of time on classical computers.</p>
      
      <h2 id="applications">Applications</h2>
      <p>Potential applications include breaking cryptographic codes, simulating molecular structures for drug discovery, and solving complex optimization problems.</p>

      <h2 id="challenges">Challenges</h2>
      <p>Despite the promise, quantum computers face major challenges such as error correction, scalability, and maintaining quantum coherence.</p>
    `,
    image: quantumImage,
    category: 'Science',
    readTime: '5 min read',
    contributors: 3,
    lastModified: '2025-04-10',
    references: [
      { id: 1, text: 'Wikipedia: Quantum Computing' },
      { id: 2, text: 'IBM Research: Quantum' },
    ],
  },
  {
    id: 2,
    title: 'Climate Change',
    description: 'Understanding global environmental shifts and their impact on ecosystems and human societies.',
    content: `
      <h2 id="overview">Overview</h2>
      <p>Climate change refers to long-term shifts in temperatures and weather patterns, mainly caused by human activities such as burning fossil fuels.</p>
      
      <h2 id="impacts">Impacts</h2>
      <p>Effects include rising sea levels, melting glaciers, more intense and frequent extreme weather events, and biodiversity loss.</p>

      <h2 id="solutions">Solutions</h2>
      <p>Combating climate change requires reducing carbon emissions, transitioning to renewable energy, and implementing global sustainability policies.</p>
    `,
    image: climateImage,
    category: 'Environment',
    readTime: '7 min read',
    contributors: 5,
    lastModified: '2025-04-09',
    references: [
      { id: 1, text: 'NASA: Climate Change Evidence' },
      { id: 2, text: 'IPCC Reports' },
    ],
  },
  {
    id: 3,
    title: 'Artificial Intelligence',
    description: 'The evolution of AI and its transformative effects on modern technology and society.',
    content: `
      <h2 id="history">History</h2>
      <p>Artificial Intelligence (AI) has evolved from symbolic systems and rule-based logic in the mid-20th century to modern machine learning and deep learning methods.</p>
      
      <h2 id="current-trends">Current Trends</h2>
      <p>Modern AI includes natural language processing, computer vision, and reinforcement learning, with applications in healthcare, finance, and autonomous systems.</p>

      <h2 id="ethics">Ethical Considerations</h2>
      <p>There are growing concerns around job displacement, algorithmic bias, and the need for AI governance and transparency.</p>
    `,
    image: aiImage,
    category: 'Technology',
    readTime: '6 min read',
    contributors: 4,
    lastModified: '2025-04-08',
    references: [
      { id: 1, text: 'OpenAI Blog' },
      { id: 2, text: 'Stanford AI Index Report' },
    ],
  },
];

export const newsItems = [
  {
    id: 1,
    title: 'Major Scientific Discovery',
    description: 'Researchers make breakthrough in renewable energy technology, potentially revolutionizing clean power generation.',
    date: '2024-03-15',
    category: 'Science',
  },
  {
    id: 2,
    title: 'Historical Artifact Found',
    description: 'Ancient manuscript discovered in remote location sheds new light on early human civilization.',
    date: '2024-03-14',
    category: 'History',
  },
  {
    id: 3,
    title: 'Space Exploration Milestone',
    description: 'New mission to Mars reveals unprecedented data about the planet\'s geological history.',
    date: '2024-03-13',
    category: 'Space',
  },
];

export const onThisDay = [
  {
    id: 1,
    year: '1879',
    event: 'Albert Einstein was born in Ulm, Germany',
    category: 'Science',
  },
  {
    id: 2,
    year: '1965',
    event: 'First spacewalk conducted by Soviet cosmonaut Alexei Leonov',
    category: 'Space',
  },
  {
    id: 3,
    year: '1985',
    event: 'First domain name (symbolics.com) was registered',
    category: 'Technology',
  },
];

export const categories = [
  {
    id: 1,
    name: 'Science',
    icon: 'science',
    description: 'Explore the latest scientific discoveries and research',
  },
  {
    id: 2,
    name: 'History',
    icon: 'history',
    description: 'Journey through time and explore historical events',
  },
  {
    id: 3,
    name: 'Technology',
    icon: 'computer',
    description: 'Stay updated with the latest tech innovations',
  },
  {
    id: 4,
    name: 'Arts',
    icon: 'palette',
    description: 'Discover the world of art and creativity',
  },
];

export default trendingTopics;