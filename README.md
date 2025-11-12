# Portfolio Website

A modern, responsive portfolio website built with React and Vite. Features a clean component architecture, smooth scroll animations, and vibrant green-themed design.

## Features

- 🎨 Modern, vibrant design with animated gradients
- 📱 Fully responsive across all devices
- ⚡ Fast development and build with Vite
- 🏗️ Modular component architecture
- 🎭 Smooth scroll animations using Intersection Observer
- 🎯 Complete sections: Hero, About, Work, Passions, Skills, Contact
- 🖼️ Interactive photo gallery with modal viewer
- 📊 Animated skill progress bars
- 🎨 Custom geometric shapes and decorative elements

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository and navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` folder. You can preview the production build with:
```bash
npm run preview
```

## Project Structure

```
portfolio_website/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About section
│   │   ├── Work.jsx         # Work experience & projects
│   │   ├── Passions.jsx     # Personal interests gallery
│   │   ├── Skills.jsx       # Skills with progress bars
│   │   ├── Contact.jsx      # Contact section
│   │   ├── Footer.jsx       # Footer component
│   │   ├── ImageModal.jsx   # Image modal viewer
│   │   └── README.md        # Component documentation
│   ├── hooks/               # Custom React hooks
│   │   ├── useScrollAnimation.js  # Scroll animation hook
│   │   └── README.md        # Hooks documentation
│   ├── App.jsx              # Main app component
│   ├── App.css              # Organized component styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles & CSS variables
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies & scripts
└── README.md                # Project documentation
```

## Component Architecture

The application follows a modular component structure for maintainability and scalability:

- **Layout Components**: Navbar, Footer
- **Section Components**: Hero, About, Work, Passions, Skills, Contact
- **Utility Components**: ImageModal
- **Custom Hooks**: useScrollAnimation for scroll-triggered animations

Each component is self-contained and can be easily customized or replaced.

## Customization

### Updating Content

1. **Personal Information**: Edit text directly in component files
2. **Work Experience**: Update the `workExperience` array in `Work.jsx`
3. **Skills**: Modify the `skills` array in `Skills.jsx`
4. **Contact Links**: Update the `contactLinks` array in `Contact.jsx`
5. **Passions**: Modify the `passionCategories` array in `Passions.jsx`

### Styling

- **Colors**: Update CSS variables in `src/index.css`
- **Layout**: Modify styles in `src/App.css` (organized by section)
- **Animations**: Adjust timing and easing in animation keyframes

### Images

Place your images in the `public` directory:
- Headshot: `/headshot.jpg`
- Gallery images: `/gallery/{category}/{filename}.jpg`

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties
- **Intersection Observer API** - Scroll animations

## Performance Features

- Lazy loading of animations
- Optimized Intersection Observer usage
- CSS transforms for smooth animations
- Unobserving elements after animation triggers

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design from 320px to 4K displays

## License

MIT
