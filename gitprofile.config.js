// gitprofile.config.js

const config = {
  github: {
    username: 'mdsahilhussain', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'm-sahil-hussain-75b5181a6',
    twitter: 'MdSahil90731384',
    facebook: '',
    dribbble: 'msahilhussain',
    behance: 'msahilhussain',
    medium: 'msahilhussain',
    dev: '',
    website: '',
    phone: '+91-6200083799',
    email: 'mdsahil.hussain7@gmail.com',
  },
  skills: [
    'JavaScript',
    'React.js',
    'Redux,
    'Git',
    'CSS',
    'Material-UI',
    'Bootstrap',
    'Wireframing and UI prototyping',
    'UX writing',
    'Design tools: Figma and Photoshop',
    'Graphic/print design skills',
  ],
  experiences: [
    {
      company: 'MindZenx',
      position: 'Font-End Developer',
      from: 'September 2021',
      to: 'Present',
    },
    {
      company: 'xyz',
      position: 'Full Stack Engineer',
      from: 'July 2020',
      to: 'August 2021',
    },
  ],
  education: [
    {
      institution: 'abcd',
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'avcd',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
    },
    {
      institution: 'School',
      degree: 'Secondary School Certificate (SSC)',
      from: '2007',
      to: '2012',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'msahilhussain',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
