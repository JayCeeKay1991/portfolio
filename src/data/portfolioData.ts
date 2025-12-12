type Thumbnail = {
  src: string
  height?: string
  width?: string
}

type PortfolioProject = {
  title: string
  description: string
  year: string
  stack: string[]
  thumbnails?: Thumbnail[]
}

const asset = (file: string): string => new URL(`../assets/${file}`, import.meta.url).href

export const portfolioData: PortfolioProject[] = [
  {
    title: 'Foosha',
    description: 'A foodsharing community app for mobile, and my first proper fullstack app.',
    year: '2024',
    stack: [
      'Javascript',
      'React',
      'CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Cloudinary',
      'Google Maps',
    ],
    thumbnails: [{ src: asset('foosha.png'), height: '350px' }],
  },
  {
    title: 'tape',
    description: 'A music streaming community app, developed in a team of 5.',
    year: '2024',
    stack: [
      'TypeScript',
      'React',
      'Tailwind',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Howler',
      'Wavesurfer JS',
      'Cloudinary',
    ],
    thumbnails: [{ src: asset('tape.png'), height: '350px' }],
  },
  {
    title: 'Pencil',
    description:
      'A web app used to organise freelance artists and their projects. I was part of a refactoring from Javascript to Typescript.',
    year: '2024',
    stack: ['TypeScript', 'React', 'CSS', 'Lottie', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    thumbnails: [{ src: asset('pencil.png'), height: '350px', width: '450px' }],
  },
  {
    title: 'Skogsräven',
    description:
      ' An e-commerce shop for all things outdoor. Containerized backend with a microservice architecture.',
    year: '2024',
    stack: [
      'TypeScript',
      'React',
      'CSS',
      'Zustand',
      'Node.js',
      'Express',
      'Docker',
      'RabbitMQ',
      'Redis',
      'Kubernetes',
      'MongoDB',
      'Mongoose',
    ],
    thumbnails: [{ src: asset('skogsraven.png'), height: '350px' }],
  },
  {
    title: 'Tamagotchi',
    description:
      'A retro iOS app. Experimenting with Swift and having fun with making the pixel art.',
    year: '2025',
    stack: ['Swift', 'SwiftUI', 'XCode', 'Procreate'],
    thumbnails: [
      { src: asset('tamagotchi1.png'), height: '350px' },
      { src: asset('tamagotchi2.png'), height: '350px' },
    ],
  },
  {
    title: 'Portfolio Page',
    description: 'This personal website, which I tried out the Vue.js framework for.',
    year: '2025',
    stack: ['TypeScript', 'Vue.js'],
    thumbnails: [{ src: asset('hero.png'), height: '300px' }],
  },
  {
    title: 'Tech Stack',
    description: 'Overview of the tech I am familiar with:',
    year: '',
    stack: [
      'JavaScript',
      'TypeScript',
      'CSS',
      'HTML',
      'Tailwind CSS',
      'JQuery',
      'React',
      'Next.js',
      'Angular.js',
      'Vue.js',
      'Swift',
      'SwiftUI',
      'Zustand',
      'Node.js',
      'Express',
      'Koa',
      'Docker',
      'RabbitMQ',
      'Kubernetes',
      'Terraform',
      'Redis',
      'MongoDB',
      'Mongoose',
      'Postgres',
      'Figma',
      'Git',
      'Heroku',
      'Netlify',
      'Vercel',
      'Postman',
    ],
  },
]
